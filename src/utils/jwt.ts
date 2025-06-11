import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; 

export function generateToken(payload: object, expiresIn = "7d") {
     return jwt.sign(payload, JWT_SECRET as string, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string) {
     return jwt.verify(token, JWT_SECRET);
}
