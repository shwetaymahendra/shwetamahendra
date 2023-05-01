import React, { Component } from "react";
import Slider from "react-slick";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

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
          breakpoint : 1280,
          settings : {
            slidesToShow:4,
          }
        },
        {
          breakpoint : 1000,
          settings : {
           slidesToShow:3,
          }
        },
        {
          breakpoint : 650,
          settings : {
            slidesToShow:2,
          }
        }
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
            <a href="https://tailwindcss.com/docs/align-content" target="_blank" rel="noreferrer" smooth duration={500} className=" group text-white w-fit md:max-w-96 px-4 py-2 my-2 flex rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 
			cursor-pointer text-right ml-auto ">
              View more
              <span className="group-hover:scale-110 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </a>
          </div>

        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}
