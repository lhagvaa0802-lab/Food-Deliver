"use client";

import { Plus } from "lucide-react";

type FoodCardProps = {
  foodName: string;
  description: string;
  price: number;
  image: string;
};

export default function FoodCard({
  foodName,
  description,
  price,
  image,
}: FoodCardProps) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={foodName}
          className="h-40 w-full object-cover rounded-xl"
        />

        <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow">
          <Plus className="w-4 h-4 text-red-500" />
        </button>
      </div>

      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h2 className="text-red-500 font-semibold">{foodName}</h2>
          <span className="text-sm font-semibold">${price}</span>
        </div>

        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
