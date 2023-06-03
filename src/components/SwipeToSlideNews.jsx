import React, { Component } from "react";
import Slider from "react-slick";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DailyGuardianReview from '../assets/Blog/DailyGaurdianReview.jpg'
import HeavenMailReiview3 from '../assets/Blog/HeavenMailReview3.jpg';
import HindustanTimes from '../assets/Blog/HindustanTimes.jpeg';
import Dailyhunt from '../assets/Blog/Dailyhunt.webp';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      dots: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
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
        </div>

        <Slider {...settings}>
          <div className="p-4">
            <a href="https://epaper.thedailyguardian.com/view/223/tdg-17-april/14" target="_blank" rel="noreferrer">
            <img
              src={DailyGuardianReview}
              alt="DailyGuardianReview"
              className="rounded-xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt="HeavenMailReview"
              className="rounded-xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="https://www.hindustantimes.com/cities/mumbai-news/stranded-pink-flamingo-at-dps-lake-in-nerul-sparks-concern-among-residents-and-activists-as-experts-monitor-bird-s-condition-for-rescue-efforts-flamingorescue-dpslake-nerul-101681413625270.html" target="_blank" rel="noreferrer">
            <img
              src={HindustanTimes}
              alt="HindustanTimes"
              className="rounded-xl"
            />
            </a>
          </div>
          <div className="p-4">
            <a href="http://dhunt.in/MFZFO" target="_blank" rel="noreferrer">
            <img
              src={Dailyhunt}
              alt="DailyHunt"
              className="rounded-xl"
            />
            </a>
          </div>
          {/* <div className="p-4">
            <a href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5" target="_blank" rel="noreferrer">
            <img
              src={HeavenMailReiview3}
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
           */}
        </Slider>
      </div>
    );
  }
}
