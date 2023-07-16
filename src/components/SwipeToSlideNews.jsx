import React, { Component } from "react";
import Slider from "react-slick";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NewsMedia0 from "../assets/NewsMedia/NewsMedia0.jpeg";
import NewsMedia1 from "../assets/NewsMedia/NewsMedia1.jpg";
import NewsMedia2 from "../assets/NewsMedia/NewsMedia2.jpg";
import NewsMedia3 from "../assets/NewsMedia/NewsMedia3.jpeg";
import NewsMedia4 from "../assets/NewsMedia/NewsMedia4.jpg";
import NewsMedia5 from "../assets/NewsMedia/NewsMedia5.webp";

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
      <div className="max-h-lg py-10 ">
        <div className="pr-6"></div>

        <Slider {...settings}>
          <div className="p-4">
            <a
              href="https://epaper.thedailyguardian.com/view/223/tdg-17-april/14"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={NewsMedia0}
                alt="DailyGuardianReview"
                className="rounded-xl h-80 w-64"
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://epaper.thedailyguardian.com/view/223/tdg-17-april/14"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={NewsMedia1}
                alt="DailyGuardianReview"
                className="rounded-xl h-96 w-64"
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://epaper.heavenmail.in/epaper/edition/648/heavenmail-april/page/5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={NewsMedia2}
                alt="HeavenMailReview"
                className="rounded-xl h-96 w-64"
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://www.hindustantimes.com/cities/mumbai-news/stranded-pink-flamingo-at-dps-lake-in-nerul-sparks-concern-among-residents-and-activists-as-experts-monitor-bird-s-condition-for-rescue-efforts-flamingorescue-dpslake-nerul-101681413625270.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NewsMedia3} alt="NewsMedia3" className="rounded-xl h-96 w-64" />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://up18news.com/many-visions-many-worlds-a-book-on-various-dimensions-of-space-time-by-author-shweta-mahendra/?fbclid=IwAR0-MJNIxbknFzq0hz4ehxPh4X3rj3OYg0wseU1-WXSNALCUefIADdk55Vc_aem_AVQ-3WhPo3cQwwZgUtpp9JAjgjbjpKUy9MMKx5micjMO_AfvERgB9wV9wHoCJbylbHk&mibextid=Zxz2cZ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={NewsMedia4}
                alt="DailyHunt"
                className="rounded-xl h-96 w-64"
              />
            </a>
          </div>
          <div className="p-4">
            <a href="http://dhunt.in/MFZFO" target="_blank" rel="noreferrer">
              <img src={NewsMedia5} alt="DailyHunt" className="rounded-xl h-96 w-64" />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://www.sudarshannews.in/nd.aspx?id=93237"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://assets-news-bcdn.dailyhunt.in/cmd/resize/1066x1600_90/fetchdata16/images/50/fd/2e/50fd2e30e1257c416b6cb925705458cbe859a82744cc07fed927fc03f1791a20.webp"
                alt=""
                className="rounded-2xl h-96 w-64"
              />
            </a>
          </div>

          <div className="p-4">
            <a
              href="https://www.joshbharat.com/2023/06/ShwetaMahendrabooks.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNdeK9JSDOzFBqqMx8G2oSmbUleMFm2XV9uUU9JZCrIEXsQ0Sv7jPuUr-U9ptV65Z4qsgA1neHn9-nLCHNmrKHvrA8SA7Rx6Am2iikX6VFgYpoWGTEbwQW6kmE3zCEIiBLPWTXOZuok8W6ogWs_LRHvjOvNUn0AcHgDCIS9h3byaRoUMp7ICHKuw/s1600/IMG-20230610-WA0247(1).jpg"
                alt=""
                className="rounded-2xl h-96 w-64"
              />
            </a>
          </div>

          <div className="p-4">
            <a
              href="https://m.dailyhunt.in/news/india/hindi/josh+bharat-epaper-dh832812b9d1ff451aa43380d9b51fa20e/ek+adabhut+pratibha+ki+dhani+shveta+mahindra+ne+likhi+pustak-newsid-dh832812b9d1ff451aa43380d9b51fa20e_7f61228007a311eebdf564a61a1879c8?sm=Y"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNdeK9JSDOzFBqqMx8G2oSmbUleMFm2XV9uUU9JZCrIEXsQ0Sv7jPuUr-U9ptV65Z4qsgA1neHn9-nLCHNmrKHvrA8SA7Rx6Am2iikX6VFgYpoWGTEbwQW6kmE3zCEIiBLPWTXOZuok8W6ogWs_LRHvjOvNUn0AcHgDCIS9h3byaRoUMp7ICHKuw/s1600/IMG-20230610-WA0247(1).jpg"
                alt=""
                className="rounded-2xl h-96 w-64"
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
