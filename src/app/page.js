import React from "react";
import Hero from "./components/Home/Hero";
import FeaturedBlog from "./components/Home/Featured";
import Steps from "./components/Home/Steps";

const App = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-16">
      <Hero />
      <FeaturedBlog />
      <Steps />
    </div>
  );
};

export default App;
