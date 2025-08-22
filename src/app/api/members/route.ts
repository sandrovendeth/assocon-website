import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { membershipSchema } from "@/lib/validations";
import { getUserFromRequest } from "@/lib/auth";

// Create new member application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = membershipSchema.parse(body);

    // Check if member already exists
    const existingMember = await prisma.member.findFirst({
      where: {
        OR: [{ email: data.email }, ...(data.cpf ? [{ cpf: data.cpf }] : [])],
      },
    });

    if (existingMember) {
      return NextResponse.json(
        { error: "Já existe um membro com este email ou CPF" },
        { status: 400 }
      );
    }

    const member = await prisma.member.create({
      data,
    });

    return NextResponse.json({
      message: "Solicitação de associação enviada com sucesso",
      member: {
        id: member.id,
        name: member.name,
        email: member.email,
        status: member.status,
      },
    });
  } catch (error) {
    console.error("Member creation error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Get all members (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = getUserFromRequest(request);

    if (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
      return NextResponse.json(
        { error: "Acesso não autorizado" },
        { status: 401 }
      );
    }

    const members = await prisma.member.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ members });
  } catch (error) {
    console.error("Get members error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

