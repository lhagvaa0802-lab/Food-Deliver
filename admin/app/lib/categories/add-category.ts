export async function addCategory(categoryName: string): Promise<void> {
  const res = await fetch("/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ categoryName }),
  });

  if (!res.ok) throw new Error("Failed to add category");
}
