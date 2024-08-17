"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        console.log("Please fill in all required fields");
        return;
      }

      const response = await axios.post(
        "/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    } catch (error) {
      console.log("An error occurred while logging in");
    }
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-[95vw] lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 py-16">
        <h2 className="text-5xl font-medium text-center">Login</h2>
        <div className="w-full">
          <h3 className="text-3xl font-medium mb-6">
            Please login to your account
          </h3>
          <form className="flex flex-col gap-4 w-full">
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
              {`Don't have an account? `}
              <Link href="/signup" className="text-blue-500 font-medium">
                Register
              </Link>
            </p>
            <button
              onClick={handleLogin}
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
