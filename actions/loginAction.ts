
"use server";
import { cookies } from "next/headers";

export async function loginUser(username: string, password: string) {
  // Example: Fetch API call to authenticate
//   const response = await fetch("/api/login", {
//     method: "POST",
//     body: JSON.stringify({ username, password }),
//   });

//   if (response.ok) {
  if (true) {
  
    // const { token } = await response.json();
    const token = await 'sdfsdfsfdsfdsf';
    cookies().set("authToken", token); // Store token in cookies
    return true;

  } else {
    throw new Error("Login failed");
  }
}

export async function logoutUser() {
    // Clear the authentication cookie
    cookies().set("authToken", "", {
      path: "/", // Ensure it's cleared site-wide
      expires: new Date(0), // Set an expiration in the past
      httpOnly: true, // Ensure it's secure
    });
  
    return { success: true }; // Optional: Can be used for confirmation
  }


  export async function isLogin() {
    const authToken = cookies().get("authToken");
    if (!authToken) {
      return false; // User is not authenticated
    }
    return true;
  }
