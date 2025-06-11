import { cookies } from "next/headers";
import { verifyToken } from "@/utils/jwt";

export async function getAuthUserId(): Promise<string | null> {
     const token = (await cookies()).get("token")?.value;
     if (!token) return null;

     try {
          const decoded = verifyToken(token) as { userId: string };
          return decoded.userId;
     } catch {
          return null;
     }
}
