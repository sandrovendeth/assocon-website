import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

export async function GET(request: NextRequest) {
  try {
    // Get token from cookie
    const authCookie = request.cookies.get("auth-token");

    if (!authCookie || !authCookie.value) {
      return NextResponse.json(
        { error: "Token não encontrado" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(authCookie.value, JWT_SECRET) as any;

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 401 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error);
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }
}
