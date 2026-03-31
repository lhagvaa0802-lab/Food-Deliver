import { fetchCategory } from "@/app/lib/categories/get-category";
import { FoodCategory } from "@/app/types/food-category";

import { AddCategoryButton } from "./addCategoryButton";

export const Category = async () => {
  const categories: FoodCategory[] = await fetchCategory();

  return (
    <div className="bg-white rounded-xl px-4 py-3 mb-6">
      <p className="text-sm font-semibold text-neutral-700 mb-3">
        Dishes category
      </p>
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 text-neutral-500 bg-white"
          >
            {category.categoryName}
          </div>
        ))}
        <AddCategoryButton />
      </div>
    </div>
  );
};
