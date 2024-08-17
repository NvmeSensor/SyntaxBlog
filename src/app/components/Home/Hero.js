import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-[95vw] flex justify-center items-center min-h-screen rounded-xl hero">
      <div className="grid grid-cols-1 justify-center items-center gap-12 container md:px-10 px-5 py-[125px] lg:py-[250px]">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="lg:text-6xl text-5xl text-center font-semibold">
            Unleash Your Creativity with SyntaxBlog
          </h1>
          <p className="lg:text-3xl text-xl text-center max-w-[1200px] subhead">
            SyntaxBlog is your go-to destination for in-depth articles and
            insights on the latest programming technologies and best practices.
          </p>
          <Link href="/postblog" className="text-xl px-6 py-2 rounded-full btn">
            Get Started
          </Link>
        </div>
        <div className="flex justify-center items-center container">
          <img
            src="https://cdn.pixabay.com/photo/2023/09/24/15/52/ai-generated-8273245_1280.jpg"
            alt="hero"
            draggable={false}
            className="heroimg rounded-xl object-cover w-full max-h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
