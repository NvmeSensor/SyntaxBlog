"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const postBlog = async (e) => {
    e.preventDefault();
    try {
      if (!title || !description || !coverImageUrl || !content || !tags) {
        console.log("Please fill in all required fields");
        return;
      }

      const blog = {
        title,
        description,
        coverImageUrl,
        content,
        tags: tags.split(","),
      };
      const response = await axios.post("/api/blog/postblog", blog, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Blog posted successfully");
        setTimeout(() => {
          router.push("/blogs");
        }, 2000);
      }
    } catch (error) {
      console.log("An error occurred while posting the blog");
    }
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-[95vw] lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 py-16">
        <h2 className="text-5xl font-medium text-center">Post Blog</h2>
        <div className="w-full">
          <h3 className="text-3xl font-medium mb-6">Start Editing Blog</h3>
          <form className="flex flex-col gap-4 w-full">
            <label htmlFor="title" className="text-xl font-medium">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description" className="text-xl font-medium">
              Blog Description
            </label>
            <input
              type="text"
              placeholder="Blog description"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="coverImageUrl" className="text-xl font-medium">
              Cover Image URL
            </label>
            <input
              type="url"
              placeholder="Cover image URL"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
            />

            <label htmlFor="content" className="text-xl font-medium">
              Blog Content
            </label>
            <textarea
              placeholder="Blog content"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <label htmlFor="tags" className="text-xl font-medium">
              Tags
            </label>
            <input
              type="text"
              placeholder="Tags separated by commas"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <button
              onClick={postBlog}
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogEditor;
