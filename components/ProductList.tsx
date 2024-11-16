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
           <div className="flex items-center justify-center w-full h-40 bg-slate-50">
           <ShoppingBag className="h-6 w-6 text-red-900" />
           </div>
           <div className="p-4 items-center justify-center w-full h-20">
             <p className="text-lg">{product.name}</p>
           </div>
         </div>
         </Link>
        ))}
        
      
        
    </>
  );
}




