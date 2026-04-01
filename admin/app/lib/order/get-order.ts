import type { FoodOrder } from "@/app/types/food-order";
import { cookies } from "next/headers";

const BASE_URL = process.env.API_URL;

export async function fetchFoodOrders(): Promise<FoodOrder[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log("TOKEN IN GET ORDER:", token);

  const res = await fetch(`${BASE_URL}/orders`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch orders");

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.orders)) return data.orders;
  return [];
}
