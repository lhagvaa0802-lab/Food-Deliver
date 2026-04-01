import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.API_URL;

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  console.log("TOKEN FROM REQ:", token);

  const res = await fetch(`${BASE_URL}/orders`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  if (!res.ok)
    return NextResponse.json(
      { message: "Failed to fetch orders" },
      { status: res.status },
    );
  return NextResponse.json(data);
}
