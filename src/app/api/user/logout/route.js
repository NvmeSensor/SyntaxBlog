import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = NextResponse.json(
      { message: "User logged out successfully" },
      { status: 200 }
    );

    response.cookies.set("token", "", { httpOnly: true, maxAge: 0 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
