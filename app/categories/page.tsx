import { getCategories } from "@/actions/categoryActions";
import CategoryList from "@/components/CategoryList";

export default async function CategoriesPage() {
  const categories = await getCategories();
  
  return (
  <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <CategoryList categories={categories} />
      </div>
    </div>
  );
}
