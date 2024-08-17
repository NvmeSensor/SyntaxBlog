"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogView from "@/app/components/BlogView";
import axios from "axios";
import { marked } from "marked";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchBlogDetails = async () => {
        try {
          const response = await axios.post("/api/blog/blogdetails", { slug });

          if (response.status !== 200) {
            throw new Error("Failed to fetch blog details");
          }

          const blogData = response.data.blog;
          blogData.content = marked(blogData.content);
          setBlog(blogData);
        } catch (error) {
          console.log("An error occurred while fetching the blog details");
        }
      };

      fetchBlogDetails();
    }
  }, [slug]);

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full">
      {blog ? (
        <BlogView
          coverImageUrl={blog.coverImageUrl}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          date={blog.date}
          tags={blog.tags}
          content={blog.content}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
