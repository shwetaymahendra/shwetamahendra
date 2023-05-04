import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen pt-24 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 md:pt-5">
            About
          </p>
        </div>

        <p className="text-xl mt-10 md:mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          itaque totam delectus pariatur et iste ullam amet vitae provident
          eligendi nesciunt repudiandae, enim tempore non omnis. Neque aut
          similique quis harum quas. Natus accusamus fuga architecto corrupti
          facere illum beatae veritatis alias minus. Laborum at tempora
          architecto sit porro eveniet.
        </p>
        <br />

        <p className=" mt-2 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          facere est omnis quae eius repellendus minus consequatur nihil
          voluptatibus fugiat voluptas veritatis, dolorem vero explicabo eum
          officiis? Repellat, voluptatibus sed.
        </p>
      </div>
    </div>
  );
};

export default About;
