"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setTimeout(() => {
      setNavbar(false);
    }, 500);
  };

  return (
    <nav className="flex justify-center items-center w-full sticky top-0 z-20">
      <div className="flex flex-col justify-start items-start w-[95vw] px-5 lg:px-7 py-3 rounded-xl navbar m-3">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="text-3xl">
            SyntaxBlog
          </Link>
          {/* Links */}
          <div className="lg:flex hidden space-x-10">
            <Link
              href="/"
              className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Blogs
            </Link>
            <Link
              href="/postblog"
              className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Post Blog
            </Link>
            <Link
              href="/login"
              className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Account
            </Link>
          </div>
          {/* Menu Icons */}
          <button
            className="flex lg:hidden items-center justify-center"
            onClick={toggleNavbar}
          >
            {navbar ? (
              <RiCloseLine className="text-3xl" />
            ) : (
              <RiMenuLine className="text-3xl" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden w-full flex flex-col justify-start items-start mt-3 space-y-5 ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <Link
            href="/"
            onClick={closeNavbar}
            className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            onClick={closeNavbar}
            className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Blogs
          </Link>
          <Link
            href="/postblog"
            onClick={closeNavbar}
            className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Post Blog
          </Link>
          <Link
            href="/login"
            onClick={closeNavbar}
            className="text-lg font-medium py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
