import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { postSchema } from "@/lib/validations";
import { getUserFromRequest } from "@/lib/auth";
import { generateSlug } from "@/lib/utils";

// Get published posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const where = {
      published: true,
      ...(category && {
        category: category.toUpperCase() as
          | "NEWS"
          | "EVENT"
          | "ANNOUNCEMENT"
          | "GENERAL",
      }),
    };

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.post.count({ where }),
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get posts error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Create new post (admin only)
export async function POST(request: NextRequest) {
  try {
    const user = getUserFromRequest(request);

    if (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
      return NextResponse.json(
        { error: "Acesso não autorizado" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const data = postSchema.parse(body);

    // Generate slug from title
    const slug = generateSlug(data.title);

    // Check if slug already exists
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      return NextResponse.json(
        { error: "Já existe um post com este título" },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        ...data,
        slug,
        authorId: user.userId,
        publishedAt: data.published ? new Date() : null,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: "Post criado com sucesso",
      post,
    });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
