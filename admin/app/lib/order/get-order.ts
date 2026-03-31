import type { FoodOrder } from "@/app/types/food-order";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export async function fetchFoodOrders(): Promise<FoodOrder[]> {
  const res = await fetch(`${BASE_URL}/orders`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("Status:", res.status); // 👈 add this
  const data = await res.json();
  console.log("Data:", data); // 👈 add this

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.orders)) return data.orders;

  return [];
}
