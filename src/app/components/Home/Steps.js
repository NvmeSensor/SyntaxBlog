import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

const Steps = () => {
  return (
    <section className="w-[95vw] flex flex-col justify-start items-center gap-7 mb-20">
      <h2 className="text-4xl font-medium text-center">
        Get started in 3 simple steps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 lg:container px-5">
        <div className="flex flex-col justify-start items-center gap-2 p-4 rounded-lg cursor-pointer w-full stepscard">
          <IoIosLogIn className="text-5xl" />
          <p className="text-2xl text-center font-medium">Login or Signup</p>
          <p className="text-lg text-center">
            Create an account or login account to get started.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2 p-4 rounded-lg cursor-pointer w-full stepscard">
          <IoCreateOutline className="text-5xl" />
          <p className="text-2xl text-center font-medium">Create a blog post</p>
          <p className="text-lg text-center">
            Write a blog post about your favorite programming language or
            technology.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2 p-4 rounded-lg cursor-pointer w-full stepscard">
          <IoShareSocialOutline className="text-5xl" />
          <p className="text-2xl text-center font-medium">Publish and share</p>
          <p className="text-lg text-center">
            Publish your blog post and share it with the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
