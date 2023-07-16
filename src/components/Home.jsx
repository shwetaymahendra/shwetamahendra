import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImage1 from "../assets/Carousel/CarouselImage1.JPG";
import CarouselImage2 from "../assets/Carousel/CarouselImage2.jpg";
import CarouselImage3 from "../assets/Carousel/CarouselImage3.jpg";
import CarouselImage4 from "../assets/Carousel/CarouselImage4.JPG";
import CarouselImage5 from "../assets/Carousel/CarouselImage5.JPG";
import CarouselImage6 from "../assets/Carousel/CarouselImage6.JPG"
import CarouselImage7 from "../assets/Carousel/CarouselImage7.jpeg";
import CarouselImage8 from "../assets/Carousel/CarouselImage8.jpeg";
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
          style={{ height: "50%", width: "78%", marginTop: "4rem" , paddingBottom:"10rem"  }}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper rounded-2xl custom-swiper"
        >
          <SwiperSlide >
            <img
              src={CarouselImage1}
              alt="carousel3"
              className="w-full lg:h-screen "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage2}
              alt="carousel3"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage3}
              alt="carousel3"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage4}
              alt="carousel4"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage5}
              alt="carousel5"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage6}
              alt="carousel6"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage7}
              alt="carousel7"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage8}
              alt="carousel8"
              className="w-full lg:h-screen object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Home;
