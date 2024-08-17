import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";
import connectDB from "@/app/config/db";

connectDB();

export async function POST(request) {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching the blog" },
      { status: 500 }
    );
  }
}
