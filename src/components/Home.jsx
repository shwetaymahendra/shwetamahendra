import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CarouselImage1 from "../assets/Carousel/CarouselImage1.jpg";
// import CarouselImage2 from "../assets/Carousel/CarouselImage2.jpg";
import CarouselImage3 from "../assets/Carousel/CarouselImage3.jpg";
import CarouselImage11 from "../assets/Carousel/CarouselImage11.jpeg";
import CarouselImage12 from "../assets/Carousel/CarouselImage12.jpeg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-b from-black via-black to-gray-800 pt-2">
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
              src={CarouselImage11}
              alt="carousel3"
              className="w-full lg:h-screen  object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage12}
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
        </Swiper>
        );
      </div>
    </React.Fragment>
  );
};

export default Home;
