import React from "react";
import Dummy from '../assets/dummy.jpg'

const Blog = () => {
  const Blog = [
    {
      id: 1,
      src: Dummy,
      title: "Sample",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Dummy,
      title: "Sample",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Dummy,
      title: "Sample",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Dummy,
      title: "Sample",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Dummy,
      title: "Sample",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: Dummy,
      title: "Sample",
      style: "shadow-sky-400",
    },
    // {
    //   id: 7,
    //   src: Dummy,
    //   title: "Sample",
    //   style: "shadow-purple-500",
    // },
  ];

  return (
    <div
      name="blog"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Blog
          </p>
          <p className="py-6">Here are some of my Blog</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {Blog.map(({ id, src, title, style }) => (
            <div key={id} 
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
