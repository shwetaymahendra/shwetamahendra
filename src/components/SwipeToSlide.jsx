import React, { Component } from "react";
import Slider from "react-slick";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DailyGuardianReview1 from '../assets/Blog/DailyGaurdianReview1.jpg'
import HeavenMailReiview3 from '../assets/Blog/HeavenMailReview3.jpg';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      dots: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="max-h-lg py-10 ">
        <div className="pr-6">
          {/* <a
            href="https://voluble-hotteok-c43fbc.netlify.app/"
            target="_blank"
            rel="noreferrer"
            smooth
            duration={500}
            className=" group text-white w-fit md:max-w-96 py-2 my-2 flex rounded-md  
			cursor-pointer text-right ml-auto hover:scale-105 duration-300 "
          >
            View more
            <span className="group-hover:scale-110 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </a> */}
        </div>

        <Slider {...settings}>
          <div className="p-4">
            <a href="https://epaper.thedailyguardian.com/view/223/tdg-17-april/14" target="_blank" rel="noreferrer">
            <img
              src={DailyGuardianReview1}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://timesofindia.indiatimes.com/blogs/voices/many-visions-many-worlds-the-harmonious-blend-of-the-past-present-the-future/" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          
        </Slider>
      </div>
    );
  }
}
