type AddFoodInput = {
  foodName: string;
  description: string;
  price: number;
  image: string;
  ingredients: string;
  categoryId: number;
};

export async function addFood(input: AddFoodInput): Promise<void> {
  const res = await fetch("/api/foods", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) throw new Error("Failed to add food");
}
