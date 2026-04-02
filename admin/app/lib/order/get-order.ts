import type { FoodOrder } from "@/app/types/food-order";
import { cookies } from "next/headers";

const BASE_URL = process.env.API_URL;

export async function fetchFoodOrders(
  startDate?: string,
  endDate?: string,
): Promise<FoodOrder[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const url = new URL(`${BASE_URL}/orders`);
  if (startDate) url.searchParams.set("startDate", startDate);
  if (endDate) url.searchParams.set("endDate", endDate);

  const res = await fetch(url.toString(), {
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
