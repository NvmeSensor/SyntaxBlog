import React from "react";
import Link from "next/link";

const Footer = () => {
  const blogLinks = [
    {
      name: "Blogs",
      url: "/blogs",
    },
  ];

  const publishLinks = [
    {
      name: "Write a Blog Post",
      url: "/postblog",
    },
    {
      name: "Your Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center w-full footer">
      <p className="text-md font-light my-3">
        All rights reserved © 2024 SyntaxBlog
      </p>
    </footer>
  );
};

export default Footer;
