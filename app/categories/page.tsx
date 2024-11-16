import { getCategories } from "@/actions/categoryActions";
import CategoryList from "@/components/CategoryList";
import Image from "next/image";
import { ShoppingBag, Package, Tag, Home,Briefcase,Star } from "lucide-react";

export default async function CategoriesPage() {
  const categories = await getCategories();
  // const categoriesli = [
  //   {
  //     id: 1,
  //     name: "Electronics",
  //     icon: ShoppingBag,
  //   },
  //   {
  //     id: 2,
  //     name: "Fashion",
  //     icon: Package,
  //   },
  //   {
  //     id: 3,
  //     name: "Home Appliances",
  //     icon: Home,
  //   },
  //   {
  //     id: 4,
  //     name: "Office Supplies",
  //     icon: Briefcase,
  //   },
  //   {
  //     id: 5,
  //     name: "Deals & Offers",
  //     icon: Star,
  //   },
  // ];


  return (
  
  <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <CategoryList categories={categories} />
        {/* {categoriesli.map((category) => (
          <div
            key={category.id}
            className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <div className="p-3 bg-blue-100 rounded-full">
              <category.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="ml-4 text-lg font-bold">{category.name}</h3>
          </div>
        ))} */}
      </div>
    </div>
     
  
  );
}
