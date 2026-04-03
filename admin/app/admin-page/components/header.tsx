import { cookies } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const BASE_URL = process.env.API_URL;

export interface Root {
  message: string;
  user: User;
}

export interface User {
  email: string;
  phoneNumber: string;
}

const gettUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await res.json();
  console.log("USER DATA:", JSON.stringify(user));
  return user as Root;
};

export const Header = async () => {
  const data = await gettUser();

  console.log(JSON.stringify(data));

  return (
    <div className=" border flex justify-end">
      <div className="flex flex-col items-center justify-between">
        <Avatar className="test-black mr-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{data?.user?.email ?? "Loading..."}</p>
      </div>
    </div>
  );
};
