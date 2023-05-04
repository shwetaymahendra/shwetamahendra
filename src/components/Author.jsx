import React from "react";
import SwipeToSlideAuthor from "./SwipeToSlideAuthor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Review1 from "../assets/Reviews/Review1.JPG";
import Review2 from "../assets/Reviews/Review2.JPG";
import Review3 from "../assets/Reviews/Review3.JPG";
import Review4 from "../assets/Reviews/Review4.JPG";
import Review5 from "../assets/Reviews/Review5.JPG";
import Review6 from "../assets/Reviews/Review6.JPG";
import Review7 from "../assets/Reviews/Review7.JPG";
import Review8 from "../assets/Reviews/Review8.JPG";
import Review9 from "../assets/Reviews/Review9.JPG";
import Review10 from "../assets/Reviews/Review10.JPG";
// import Aimg1 from "../assets/Author Images/Authorimg1.jpg";
// import Aimg2 from "../assets/Author Images/Authorimg2.jpg";
// import Aimg3 from "../assets/Author Images/Authorimg3.jpg";

const Author = () => {
  return (
    <div
      name="Author"
      className="bg-gradient-to-b from-gray-800  to-black w-full text-white 2xl:h-fit h-fit  container max-w-full "
    >
      <div className="max-w-screen-lg  h-fit-lg p-4 mx-auto flex flex-col justify-center center w-full h-full ">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
            Author
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div>
          <SwipeToSlideAuthor />
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-2xl pt-5 pb-2 font-bold">
          Reviews
        </h1>

        <div className="bg-gradient-to-b from-black to-gray-800   p-0 pt-2">
          <React.Fragment>
            <Swiper
              style={{
                height: "50%",
                width: "65%",
                marginTop: "",
                ".swiper-button-next::after, .swiper-button-prev::after": {
                  color: "black",
                },
              }}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper rounded-md custom-swiper2 contents"
            >
              <SwiperSlide>
                <img
                  src={Review1}
                  alt="carousel3"
                  className="w-full  lg:h-fit h-fit  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review2}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review3}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review4}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review5}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review6}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review7}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review8}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review9}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Review10}
                  alt="carousel3"
                  className="w-full lg:h-fit h-fit object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default Author;
