import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

    // Protect admin routes (currently disabled - using client-side auth)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    // Note: Authentication is handled client-side in dashboard component
    // to avoid Edge Runtime compatibility issues with JWT verification
  }

  return NextResponse.next();
}

export const config = {
  matcher: [],
};
