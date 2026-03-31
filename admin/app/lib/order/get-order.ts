import type { FoodOrder } from "@/app/types/food-order";

export async function fetchFoodOrders(): Promise<FoodOrder[]> {
  const res = await fetch("/api/orders", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch orders");

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.orders)) return data.orders;
  return [];
}
