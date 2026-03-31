const BASE_URL = "http://localhost:4000";

export async function addCategory(categoryName: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoibGhhZ3ZhYTA4MDJAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzc0Nzk0ODU0LCJleHAiOjE3NzQ5Mzg4NTR9.2sLlJnFDoRDLtOrAwl5EYQrz7xisQSnQmFSITeXeLS8`, // paste token here
    },
    body: JSON.stringify({ categoryName }),
  });

  if (!res.ok) throw new Error("Failed to add category");
}
