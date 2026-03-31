import { fetchFoods } from "@/src/lib/getFoods"; 
import type { Food } from "@/src/types";

export default async function MenuPage() {
  const foods: Food[] = await fetchFoods();

  return (
    <div className="bg-[#3f3f3f] min-h-screen p-6">
      <h1 className="text-white text-xl mb-4">Appetizers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div key={food.id} className="bg-white rounded-xl p-4 shadow">
            <img
              src={food.image}
              alt={food.foodName}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />

            <h2 className="text-lg font-bold">{food.foodName}</h2>
            <p className="text-sm text-gray-600 mb-2">{food.ingredients}</p>
            <p className="font-semibold">${food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
