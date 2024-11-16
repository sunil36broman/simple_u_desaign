import { getCategoryDetails } from "@/actions/categoryActions";
import ProductList from "@/components/ProductList";
import Image from "next/image";

interface CategoryDetailsPageProps {
  params: { categoryId: string };
}

export default async function CategoryDetailsPage({ params }: CategoryDetailsPageProps) {
  const { categoryId } = params;
  const category = await getCategoryDetails(categoryId);
  return (
    <>
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <ProductList products={category} categoryID={categoryId}/>
      </div>
    </div>
    </>
  );
}
