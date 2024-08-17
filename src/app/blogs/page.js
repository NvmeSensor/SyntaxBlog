"use client";
import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog/fetchblog");
      const data = await response.json();
      if (response.status === 200) {
        console.log("Blogs fetched successfully");
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.log("An error occurred while fetching the blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="w-[95vw] flex flex-col justify-start items-center gap-7 py-20">
        <h2 className="text-5xl font-medium text-center">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 lg:container px-5 w-full">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
