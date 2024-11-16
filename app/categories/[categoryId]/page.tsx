import { getCategoryDetails } from "@/actions/categoryActions";
import ProductList from "@/components/ProductList";
import Image from "next/image";

interface CategoryDetailsPageProps {
  params: { categoryId: string };
}

export default async function CategoryDetailsPage({ params }: CategoryDetailsPageProps) {
  const { categoryId } = params;
  const category = await getCategoryDetails(categoryId);


  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$25.00",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30.00",
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$15.00",
      image: "/images/product3.jpg",
    },
  ];
  return (
    <>
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <ProductList products={category} categoryID={categoryId}/>
      </div>
    </div>
    </>
  );
}
