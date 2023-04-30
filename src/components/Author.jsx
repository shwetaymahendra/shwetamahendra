import React from "react";
import Aimg1 from "../assets/Author Images/authorimg1.jpg";
import Aimg2 from "../assets/Author Images/authorimg2.jpg";
import Aimg3 from "../assets/Author Images/authorimg3.jpg";

const Author = () => {
  const author = [
    {
      id: 1,
      src: Aimg1,
      mybooks: "",
    },
    {
      id: 2,
      src: Aimg2,
      mybooks: "",
    },
    {
      id: 2,
      src: Aimg3,
      mybooks: "",
    },
  ];
  return (
    <div
      name="author"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white 2xl:h-screen container max-w-full"
      // style={{paddingTop:'33em'}}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Author
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {author.map(({ id, src, mybooks }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <h1 className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  My Books
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
