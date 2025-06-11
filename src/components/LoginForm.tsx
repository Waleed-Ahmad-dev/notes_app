/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginForm() {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     const router = useRouter();

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setLoading(true);
          setError(null);

          try {
               const res = await fetch("/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
               });

               const data = await res.json();
               if (!res.ok) throw new Error(data.error || "Login failed");

               router.push("/dashboard"); // Redirect to notes dashboard
          } catch (err: any) {
               setError(err.message);
          } finally {
               setLoading(false);
          }
     };

     return (
          <form onSubmit={handleSubmit} className="space-y-4">
               <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-800 text-white placeholder-gray-400"
               />
               <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 text-white placeholder-gray-400"
               />

               {error && (
                    <p className="text-red-500 text-sm">{error}</p>
               )}

               <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
               </Button>

               <div className="text-center pt-4">
                    <p className="text-sm text-gray-400">
                         Don’t have an account?{" "}
                         <button
                              type="button"
                              onClick={() => router.push("/register")}
                              className="text-blue-500 hover:underline cursor-pointer"
                         >
                              Register
                         </button>
                    </p>
               </div>
          </form>
     );
}
