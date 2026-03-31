const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

type AddFoodInput = {
  foodName: string;
  description: string;

  price: number;
  image: string;
  ingredients: string;
  categoryId: number;
};

export async function addFood(input: AddFoodInput): Promise<void> {
  const res = await fetch(`${BASE_URL}/foods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  console.log("Response body:", data); // 👈

  if (!res.ok) {
    throw new Error("Failed to add food");
  }
}
