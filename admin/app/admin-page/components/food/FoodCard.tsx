import type { Food } from "@/app/types/food";
import { Pencil } from "lucide-react";

type FoodCardProps = {
  food: Food;
};

export function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="relative w-full h-36 overflow-hidden">
        <img
          src={food.image}
          alt={food.foodName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors">
          <Pencil className="w-3 h-3 text-neutral-600" />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="text-xs font-semibold text-red-500 leading-tight line-clamp-1">
            {food.foodName}
          </p>
          <p className="text-xs font-bold text-neutral-800 whitespace-nowrap">
            ${food.price}
          </p>
        </div>
        <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
          {food.ingredients}
        </p>
      </div>
    </div>
  );
}
