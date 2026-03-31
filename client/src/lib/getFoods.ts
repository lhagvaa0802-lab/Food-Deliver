import type { Food } from "@/src/types";

const BASE_URL = "http://localhost:4000";

export async function fetchFoods(): Promise<Food[]> {
  const res = await fetch(`${BASE_URL}/foods`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch foods");
  }

  const data = await res.json();

  console.log("SERVER DATA:", data);

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.foods)) return data.foods;

  return [];
}
