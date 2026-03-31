import { FoodCategory } from "../../types/food-category";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export async function fetchCategory(): Promise<FoodCategory[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${BASE_URL}/categories`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.categories)) return data.categories;
  return [];
}
