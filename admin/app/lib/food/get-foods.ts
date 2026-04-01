import type { Food } from "../../types/food";
import { cookies } from "next/headers";

const BASE_URL = process.env.API_URL;

export async function fetchFoods(): Promise<Food[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${BASE_URL}/foods`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch foods");

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.foods)) return data.foods;
  return [];
}
