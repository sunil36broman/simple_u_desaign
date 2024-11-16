"use client";

import { Product } from "@/types/category";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

interface ProductListProps {
  products: Product[];
  categoryID:string;
}

export default function ProductList({ products, categoryID}: ProductListProps) {

  return (
    <>
        {products.map((product) => (

        <Link href={`/categories/${categoryID}/${product.id}`} key={product.id}>
          <div
           
           className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
         >
           <div className="relative w-full h-40">
           <ShoppingBag className="h-6 w-6 text-blue-600" />
           </div>
           <div className="p-4">
             <h3 className="text-lg font-bold">{product.name}</h3>
             <p className="text-gray-500">{product.email}</p>
           </div>
         </div>
         </Link>
        ))}
        
      
        
    </>
  );
}




