import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit pt-24 bg-gradient-to-b from-black to-gray-800 text-white pb-40"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 md:pt-5">
            About
          </p>
        </div>

        <p className="text-xl mt-6 md:mt-12 text-justify">
          Shweta Mahendra is a technology leader with corporate work experience
          spanning over 25 years, in business verticals including retail,
          telecom and futuristic technologies. She is currently associated with
          Reliance Jio as Asst. Vice President in R&D department. She is working
          on futuristic technologies like metaverse, immersive experiences,
          virtual reality, cloud gaming, drones in all business domains. She is
          an expert in creating the concepts to showcase how technology will
          impact common man’s life. She has done her engineering from IIT
          Roorkee and product management course from ISB Hyderabad.
        </p>
        <br />

        <p className=" mt-2 text-xl text-justify">
          Apart from her keen interest in technology, she has a knowledge of
          Dhammalipi, an ancient Indian script which exhibits her passion for
          history, archaeology and ancient scripts. She also has keen interest
          in fields like sociology, politics, travel, fashion, fitness and keeps
          herself aware of global happenings in these areas. She is an avid
          traveler specially to historical sites across world and India.
        </p>
        {/* <p className=" mt-2 text-xl">
          She is an avid traveler specially to historical sites across world and
          India. She has knowledge of Dhammalipi an ancient Indian script.
        </p> */}
      </div>
    </div>
  );
};

export default About;
