import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin-page");
  const isLoginPage = req.nextUrl.pathname === "/login";

  if (isAdminPage && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/admin-page", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-page/:path*", "/login"],
};
