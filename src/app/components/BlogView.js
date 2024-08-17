import React from "react";

const BlogView = ({
  coverImageUrl,
  title,
  description,
  author,
  date,
  tags,
  content,
}) => {
  console.log("Content type:", typeof content);
  console.log("Content:", content);

  return (
    <section className="flex flex-col justify-start items-center py-16 w-full">
      <div className="flex flex-col justify-start items-center w-[95vw] lg:container gap-5 px-5">
        <img
          src={coverImageUrl || "https://via.placeholder.com/150"}
          alt="blog cover"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div className="flex flex-col justify-start items-start w-full gap-5 mt-3">
          <h1 className="text-4xl font-medium self-start">
            {title || "Untitled"}
          </h1>
          <p className="text-3xl font-light self-start">
            {description || "No description available"}
          </p>
          <p className="text-xl font-light self-start">
            Author: {author || "Unknown"}
          </p>
          <p className="text-lg font-light self-start">
            Published on: {date || "Unknown date"}
          </p>
          <p className="text-lg font-light self-start">
            Tags:{" "}
            {tags && tags.length > 0
              ? tags.map((tag) => `#${tag} `)
              : "No tags available"}
          </p>
          <div
            className="text-xl font-light"
            dangerouslySetInnerHTML={{
              __html: content || "<p>No content available</p>",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogView;
