import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import MultiStepForm from "@/components/MultiStepForm";

interface ProductDetailsPageProps {
  params: { productId: string ,categoryId:string};
}

function checkAuthentication(): boolean {
    const authToken = cookies().get("authToken");
    if (!authToken) {
      return false; // User is not authenticated
    }
    return true;
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { categoryId, productId } = params;
  const isAuthenticated = checkAuthentication(); 
  if (!isAuthenticated) {
    const redirectTo = `/categories/${categoryId}/${productId}`;
    const encodedRedirectTo = encodeURIComponent(redirectTo);
    redirect(`/login?redirectTo=${encodedRedirectTo}`); // Redirect to login page if not authenticated
  }
  return (
    <div>
      <h1>product details, please applay for this product</h1>
      <h1>Product ID is {productId} of category's {categoryId}</h1>
      <MultiStepForm />
    </div>
  );
}
