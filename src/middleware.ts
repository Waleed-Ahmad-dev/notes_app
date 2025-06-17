import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
     const token = request.cookies.get("token")?.value;

     if (!token) {
          return NextResponse.redirect(new URL("/login", request.url));
     }

     try {
          const verifyUrl = new URL("/api/verify-token", request.url);
          verifyUrl.searchParams.set("token", token);

          const response = await fetch(verifyUrl);

          if (response.ok) {
               const data = await response.json();
               if (data.valid) {
                    return NextResponse.next();
               }
          }
          return NextResponse.redirect(new URL("/login", request.url));
     } catch (err) {
          console.error("Error verifying token:", err);
          return NextResponse.redirect(new URL("/login", request.url));
     }
}

export const config = {
     matcher: ["/dashboard/:path*", "/api/notes/:path*"],
};