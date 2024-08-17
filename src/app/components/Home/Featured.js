"use client";
import React from "react";
import Link from "next/link";
import BlogCard from "../BlogCard";

const FeaturedBlog = () => {
  const [blogs, setBlogs] = React.useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog/fetchblog");
      const data = await response.json();
      if (response.status === 200) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("An error occurred while fetching the blogs");
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="w-[95vw] flex flex-col justify-start items-center gap-7">
      <h2 className="text-4xl font-medium text-center">Featured Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 lg:container px-5 w-full">
        {blogs.slice(0, 5).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <Link href="/blogs" className="text-xl px-6 py-2 rounded-lg btn">
        View more blogs
      </Link>
    </section>
  );
};

export default FeaturedBlog;
