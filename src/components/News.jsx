import React from "react";
import SwipeToSlideNews from "./SwipeToSlideNews";

const News = () => {
 

  return (
    <div
      name="News & Media"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full  pt-16 h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center center w-full text-white">
       
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            News & Media
          </p>
          {/* <h2 className="py-6">Here are some of my News </h2> */}
        
        </div>
        <div className="pb-10">
          <SwipeToSlideNews />
        </div>
      </div>
    </div>
  );
};

export default News;
