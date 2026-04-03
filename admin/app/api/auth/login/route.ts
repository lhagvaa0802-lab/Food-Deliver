import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.API_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("LOGIN DATA:", JSON.stringify(data)); // 👈 add this

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "Login failed" },
        { status: res.status },
      );
    }

    const response = NextResponse.json(
      { message: "Login successful", user: data.user },
      { status: 200 },
    );

    response.cookies.set("token", data.accessToken, {
      httpOnly: false,
      path: "/",
      maxAge: 60 * 60 * 40,
      sameSite: "strict",
    });

    return response;
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
