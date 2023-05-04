import React from "react";
import SwipeToSlide from "./SwipeToSlide";

const Blog = () => {
 

  return (
    <div
      name="blog"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full  pt-16 h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center center w-full text-white">
       
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Blog
          </p>
          <h2 className="py-6">Here are some of my Blog </h2>
        
        </div>
        <div>
          <SwipeToSlide />
        </div>
      </div>
    </div>
  );
};

export default Blog;
