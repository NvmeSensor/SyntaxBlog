import React from "react";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="flex flex-col justify-between items-center gap-2 p-4 rounded-lg cursor-pointer w-full stepscard"
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
              <span key={index} className="text-sm px-3 py-1 rounded-full tags">
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
  );
};

export default BlogCard;
