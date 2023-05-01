import React, { Component } from "react";
import Slider from "react-slick";


export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      dots: true,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="max-h-lg py-10 ">
        <a href="https://tailwindcss.com/docs/align-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hover:fill-purple-500 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer  hover:fill-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>

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
