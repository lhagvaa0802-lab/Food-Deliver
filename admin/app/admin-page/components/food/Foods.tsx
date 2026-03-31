import { fetchFoods } from "@/app/lib/food/get-foods";
import { fetchCategory } from "@/app/lib/categories/get-category";
import type { Food } from "@/app/types/food";
import { FoodCard } from "./FoodCard";
import { AddFoodButton } from "./AddFoodButton";

export async function Foods() {
  const foods: Food[] = await fetchFoods();
  const categories = await fetchCategory();

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const categoryFoods = foods.filter(
          (food) => food.categoryId === category.id,
        );

        return (
          <div key={category.id} className="bg-white rounded-xl px-4 py-4">
            <h2 className="text-base font-bold text-neutral-800 mb-4">
              {category.categoryName}{" "}
              <span className="text-neutral-400 font-normal">
                ({categoryFoods.length})
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <AddFoodButton
                categoryId={category.id}
                categoryLabel={category.categoryName}
                categories={categories}
              />
              {categoryFoods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
