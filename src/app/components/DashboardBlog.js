import React from "react";
import Link from "next/link";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const DashboardBlog = ({ blog, onDelete }) => {
  const deleteBlog = async () => {
    try {
      const response = await axios.delete("/api/blog/deleteblog", {
        data: { slug: blog.slug },
      });
      console.log("Blog deleted successfully:", response.data);
      if (onDelete) {
        onDelete(blog.slug);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center gap-2 stepscard p-5 rounded-lg">
      <Link
        href={`/blogs/${blog.slug}`}
        className="flex flex-col justify-between items-center gap-2 cursor-pointer w-full"
      >
        <img
          src={blog.coverImageUrl}
          alt="blog"
          draggable={false}
          className="h-[250px] w-full rounded-lg object-cover"
        />
        <div className="flex flex-col justify-start items-start gap-5 w-full flex-1">
          <p className="text-2xl text-left font-medium">{blog.title}</p>
          <p className="text-lg text-left">{blog.description}</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <div className="flex flex-wrap justify-start items-start gap-2 w-full">
            {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
              blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 rounded-full tags"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-sm px-3 py-1 rounded-full tags">
                No tags available
              </span>
            )}
          </div>
          <p className="text-lg text-left font-medium">
            {blog.author} - {blog.date}
          </p>
        </div>
      </Link>
      <p
        onClick={deleteBlog}
        className="text-3xl text-red-500 hover:text-red-600 cursor-pointer self-end p-2 bg-slate-200 rounded-full"
      >
        <MdDelete />
      </p>
    </div>
  );
};

export default DashboardBlog;
