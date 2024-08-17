"use client";
import React from "react";
import axios from "axios";
import DashboardBlog from "../components/DashboardBlog";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [user, setUser] = React.useState({});
  const [blogs, setBlogs] = React.useState([]);
  const router = useRouter();

  const userDetails = async () => {
    try {
      const response = await axios.get("/api/user/me");
      setUser(response.data.data || {});
    } catch (error) {
      console.log("Error fetching user details:", error);
    }
  };

  const userBlogs = async () => {
    try {
      const response = await axios.get("/api/user/blog");
      setBlogs(response.data.data || []);
    } catch (error) {
      console.log("Error fetching user blogs:", error);
    }
  };

  const handleDelete = (slug) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.slug !== slug));
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/user/logout");
      console.log(response.data);
      if (response.status === 200) {
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
      console.log("Error logging out: ", error);
    }
  };

  React.useEffect(() => {
    userDetails();
    userBlogs();
  }, []);

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-[95vw] lg:container flex flex-col justify-start items-center gap-8 py-16">
        <h1 className="text-5xl font-medium text-center">Dashboard</h1>
        <p className="text-3xl font-medium self-start">
          Welcome to your dashboard
        </p>

        <div className="flex flex-col justify-start items-start w-full gap-2">
          <h2 className="text-3xl font-medium mb-4">Profile Details</h2>
          <p className="text-xl">
            <span className="font-medium">Name:</span> {user.name || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-medium">Username:</span>{" "}
            {user.username || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-medium">Email:</span> {user.email || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-medium">Bio:</span> {user.bio || "N/A"}
          </p>
          <div className="mt-2 flex items-center gap-4">
            <Link href="/update" className="text-xl px-6 py-2 rounded-lg btn">
              Update Profile
            </Link>
            <button
              onClick={logout}
              className="text-xl px-6 py-2 rounded-lg btn"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="w-full mt-8">
          <h2 className="text-3xl font-medium mb-4">Your Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length ? (
              blogs.map((blog) => (
                <DashboardBlog
                  key={blog.slug}
                  blog={blog}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p className="text-xl">No blogs available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
