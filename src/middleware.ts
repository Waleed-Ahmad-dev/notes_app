import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

export function middleware(request: NextRequest) {
     const token = request.cookies.get("token")?.value;

     if (!token) {
          return NextResponse.redirect(new URL("/login", request.url));
     }

     try {
          verifyToken(token); // Will throw if invalid
          return NextResponse.next();
     } catch (err) {
          console.error("Invalid token:", err);
          return NextResponse.redirect(new URL("/login", request.url));
     }
}

export const config = {
     matcher: ["/dashboard/:path*", "/api/notes/:path*", "/"],
};
