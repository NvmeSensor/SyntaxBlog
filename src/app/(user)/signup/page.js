"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!name || !username || !email || !password) {
        console.log("Please fill in all required fields");
        return;
      }

      const response = await axios.post(
        "/api/user/signup",
        { name, username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
      console.log("An error occurred while signing up");
    }
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-[95vw] lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 py-16">
        <h2 className="text-5xl font-medium text-center">Signup</h2>
        <div className="w-full">
          <h3 className="text-3xl font-medium mb-6">Create a new account</h3>
          <form className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="text-xl font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="username" className="text-xl font-medium">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="text-xl font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 font-medium">
                Login
              </Link>
            </p>
            <button
              onClick={handleSignup}
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
