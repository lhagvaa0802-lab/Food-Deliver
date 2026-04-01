import { FoodCategory } from "@/app/types/food-category";
import { cookies } from "next/headers";

const BASE_URL = process.env.API_URL;

export async function fetchCategory(): Promise<FoodCategory[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log("CATEGORY TOKEN:", token);
  console.log("CATEGORY URL:", `${BASE_URL}/categories`);

  const res = await fetch(`${BASE_URL}/categories`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("CATEGORY STATUS:", res.status);
  const data = await res.json();
  console.log("CATEGORY DATA:", JSON.stringify(data));

  if (!res.ok) throw new Error("Failed to fetch categories");

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.categories)) return data.categories;
  return [];
}

export async function addCategory(categoryName: string): Promise<void> {
  const res = await fetch("/api/categories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ categoryName }),
  });

  if (!res.ok) throw new Error("Failed to add category");
}
