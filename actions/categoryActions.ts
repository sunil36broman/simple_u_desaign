import { Category, Product } from "@/types/category";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export async function getCategories(): Promise<Category[]> {
  // console.log("API_BASE_URL", API_BASE_URL)  
  const response = await fetch(`${API_BASE_URL}/posts`, { cache: "no-store" });
  // console.log("response of category",response)
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

export async function getCategoryDetails(categoryId: string): Promise<Product[]> {

  const response = await fetch(`${API_BASE_URL}/posts/${categoryId}/comments`, { cache: "no-store" });
  // console.log("response of catcomment",response)

  if (!response.ok) {
    throw new Error("Failed to fetch category details");
  }
  return response.json();
}
