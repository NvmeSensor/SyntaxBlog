import getDataFromToken from "@/app/helpers/getDataFromToken";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connectDB from "@/app/config/db";

connectDB();

export async function GET(request) {
  try {
    const { email } = getDataFromToken(request);

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "User found successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
