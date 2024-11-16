"use client";

import Link from "next/link";
import { Category } from "@/types/category";
import { ShoppingBag } from "lucide-react";

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <>


            {categories.map((category) => (

<Link href={`/categories/${category.id}`} key={category.id}>
              <div
              
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative w-full h-40">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{category.title}</h3>
              
              </div>
            </div>
            </Link>
            ))}


        

    </>
  );
}
