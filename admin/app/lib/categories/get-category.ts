import { FoodCategory } from "@/app/types/food-category";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function fetchCategory(): Promise<FoodCategory[]> {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.categories)) return data.categories;
  return [];
}

export async function addCategory(categoryName: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ categoryName }),
  });

  if (!res.ok) throw new Error("Failed to add category");
}
