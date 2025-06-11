import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
     const token = request.nextUrl.searchParams.get("token");

     if (!token) {
          return NextResponse.json({ valid: false }, { status: 400 });
     }

     try {
          const secret = process.env.JWT_SECRET;
          if (!secret) {
               throw new Error("Missing JWT secret");
          }
          jwt.verify(token, secret);
          return NextResponse.json({ valid: true });
     } catch (error) {
          console.error("Token verification failed:", error);
          return NextResponse.json({ valid: false }, { status: 401 });
     }
}