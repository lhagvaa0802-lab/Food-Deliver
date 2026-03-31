const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type Credentials = {
  email: string;
  password: string;
};
type CreatUserResponse = {
  accessToken: string;
};

export async function CreatUser(credentials: Credentials) {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = (await res.json()) as CreatUserResponse;
  return data;

  if (!res.ok) {
    throw new Error("Failed to add food");
  }
}
