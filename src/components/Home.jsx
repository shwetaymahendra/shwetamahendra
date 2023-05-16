import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImage1 from "../assets/Carousel/CarouselImage1.jpeg";
import CarouselImage2 from "../assets/Carousel/CarouselImage2.jpeg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-b from-black via-black to-gray-800 pt-2">
      <div className="w-full h-16 overflow-hidden">
      <Marquee className="text-white text-lg py-2 text-center whitespace-pre-wrap sm:whitespace-normal">
        <span>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}Nothingness is everything. Even when I feel nothing, I feel it completely.{'\u00A0'}{'\u00A0'}{'\u00A0'}
        </span>
      </Marquee>
    </div>
        <Swiper
          style={{ height: "50%", width: "78%", marginTop: "" }}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper rounded-2xl custom-swiper"
        >
          <SwiperSlide>
            <img
              src={CarouselImage1}
              alt="carousel3"
              className="w-full lg:h-screen  object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage2}
              alt="carousel3"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              src={CarouselImage3}
              alt="carousel3"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Home;
