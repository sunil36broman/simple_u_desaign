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
              <div className="flex items-center justify-center w-full h-40 bg-slate-50">
              <ShoppingBag className="h-6 w-6 text-red-900" />
              </div>
              <div className="p-4 items-center justify-center w-full h-20">
                <p className="text-lg">{category.title}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
