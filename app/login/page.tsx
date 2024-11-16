"use client";

import { useState } from "react";
import { useRouter,useSearchParams } from "next/navigation";
import { loginUser } from "@/actions/loginAction";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRedirectTo = searchParams.get("redirectTo");
  const redirectTo =rawRedirectTo?rawRedirectTo:"/";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const isloginsuccess=await loginUser(username, password);     
      if (isloginsuccess && redirectTo){
        router.push(redirectTo); // Redirect to the home page or dashboard
      }else{
        router.push("/login")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-10">

    <div className="max-w-6xl mx-auto py-16 px-10 bg-gray-100 rounded-lg shadow-lg">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4">
        

               <div>
                  <label className="block text-sm font-medium text-gray-700">
                  Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  
              </div>


              <div>
                  <label className="block text-sm font-medium text-gray-700">
                  password
                  </label>
                  <input
                     id="password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  
              </div>

              <div>
                  
              {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
               <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
}
