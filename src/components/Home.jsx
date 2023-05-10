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
        <Marquee className="text-white text-lg py-2 sm:h-20 text-center">'Nothingness is everything. Even when i feel nothing, I feel it completely.'</Marquee>
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
