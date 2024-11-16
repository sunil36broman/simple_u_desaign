import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken"); // Retrieve the auth token
  const url = req.nextUrl.pathname;
  if (url === "/") {
      return NextResponse.redirect(new URL("/categories", req.url));
  }
  if (url === "/login" && token) {
    return NextResponse.redirect(new URL("/categories", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/categories/:path*", "/login", "/"], // Protect these patterns
};
