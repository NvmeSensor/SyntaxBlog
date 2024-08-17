import getDataFromToken from "@/app/helpers/getDataFromToken";
import Blog from "@/models/blogModel";
import connectDB from "@/app/config/db";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
  try {
    const { email, name } = getDataFromToken(request);

    const data = await request.json();
    const { title, description, coverImageUrl, content, tags } = data;

    if (!title || !description || !content) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    const slug = Date.now().toString();

    const todayDate = new Date();
    const getDate = `${todayDate.getDate()}/${
      todayDate.getMonth() + 1
    }/${todayDate.getFullYear()}`;
    const date = getDate;

    const newBlog = new Blog({
      slug,
      title,
      description,
      coverImageUrl,
      content,
      tags: tags || [],
      author: name,
      authorEmail: email,
      date,
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating the blog" },
      { status: 500 }
    );
  }
}
