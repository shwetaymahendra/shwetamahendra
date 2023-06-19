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
          <div className="p-4">
            <a href="https://www.sudarshannews.in/nd.aspx?id=93237" target="_blank" rel="noreferrer">
            <img
              src="https://assets-news-bcdn.dailyhunt.in/cmd/resize/1066x1600_90/fetchdata16/images/50/fd/2e/50fd2e30e1257c416b6cb925705458cbe859a82744cc07fed927fc03f1791a20.webp"
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          
          <div className="p-4">
            <a href="https://www.joshbharat.com/2023/06/ShwetaMahendrabooks.html" target="_blank" rel="noreferrer">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNdeK9JSDOzFBqqMx8G2oSmbUleMFm2XV9uUU9JZCrIEXsQ0Sv7jPuUr-U9ptV65Z4qsgA1neHn9-nLCHNmrKHvrA8SA7Rx6Am2iikX6VFgYpoWGTEbwQW6kmE3zCEIiBLPWTXOZuok8W6ogWs_LRHvjOvNUn0AcHgDCIS9h3byaRoUMp7ICHKuw/s1600/IMG-20230610-WA0247(1).jpg"
              alt=""
              className="rounded-2xl"
            />
            </a>
          </div>
          
          <div className="p-4">
            <a href="https://m.dailyhunt.in/news/india/hindi/josh+bharat-epaper-dh832812b9d1ff451aa43380d9b51fa20e/ek+adabhut+pratibha+ki+dhani+shveta+mahindra+ne+likhi+pustak-newsid-dh832812b9d1ff451aa43380d9b51fa20e_7f61228007a311eebdf564a61a1879c8?sm=Y" target="_blank" rel="noreferrer">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNdeK9JSDOzFBqqMx8G2oSmbUleMFm2XV9uUU9JZCrIEXsQ0Sv7jPuUr-U9ptV65Z4qsgA1neHn9-nLCHNmrKHvrA8SA7Rx6Am2iikX6VFgYpoWGTEbwQW6kmE3zCEIiBLPWTXOZuok8W6ogWs_LRHvjOvNUn0AcHgDCIS9h3byaRoUMp7ICHKuw/s1600/IMG-20230610-WA0247(1).jpg"
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
