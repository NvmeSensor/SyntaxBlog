import getDataFromToken from "@/app/helpers/getDataFromToken";
import Blog from "@/models/blogModel";
import connectDB from "@/app/config/db";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  try {
    const { email } = getDataFromToken(request);

    const blogs = await Blog.find({ authorEmail: email });

    if (blogs.length === 0) {
      return NextResponse.json(
        { message: "No blogs found for this author" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Blogs fetched successfully",
        data: blogs,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
