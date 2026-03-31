import type { Food } from "../../types/food";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function fetchFoods(): Promise<Food[]> {
  const res = await fetch(`${BASE_URL}/api/foods`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch foods");
  }

  const data = await res.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.foods)) return data.foods;

  return [];
}
