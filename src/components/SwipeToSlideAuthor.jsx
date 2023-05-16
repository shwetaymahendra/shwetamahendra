import React, { Component } from "react";
import Slider from "react-slick";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BookImg from '../assets/Author Images/BookImg.png';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 1,
      dots: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
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
      <div className="">
        {/* <div className="pr-6">
          <a
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
          </a>
        </div> */}

        <Slider {...settings}>
          <div className="object-cover">
            <a href="https://www.amazon.in/MANY-VISIONS-WORLDS-SHWETA-MAHENDRA/dp/9391813402/ref=sr_1_1?qid=1683356680&refinements=p_27%3ASHWETA+MAHENDRA&s=books&sr=1-1"
            target="_blank" rel="noreferrer">
            <img
              src={BookImg}
              alt=""
              className="rounded-xl"
            />
            </a>
          </div>
          {/* <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div> */}
          {/* <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <img
              src="https://m.media-amazon.com/images/I/41SRZpIc9nL._SX322_BO1,204,203,200_.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div> */}
        </Slider>
      </div>
    );
  }
}
