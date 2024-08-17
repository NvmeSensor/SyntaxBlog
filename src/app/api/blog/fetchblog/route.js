import Blog from "@/models/blogModel";
import connectDB from "@/app/config/db";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  try {
    const blogs = await Blog.find().sort({ date: -1 });

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching the blogs" },
      { status: 500 }
    );
  }
}
