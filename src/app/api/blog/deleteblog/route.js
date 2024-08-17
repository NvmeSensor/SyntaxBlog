import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";
import connectDB from "@/app/config/db";

connectDB();

export async function DELETE(request) {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const result = await Blog.deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while deleting the blog" },
      { status: 500 }
    );
  }
}
