import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carasol.css"; // Import the CSS file

const NextArrow = ({ onClick }) => (
  <div className='slick-arrow next-arrow' onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className='slick-arrow prev-arrow' onClick={onClick}>
    <FaArrowLeft />
  </div>
);

function Carasol() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src='https://test.ashianafresh.com/assets/media/attachments/public/64a/39a/553/thumb_3_0_0_contain_48a4b15e.jpg'
            alt='Slide 1'
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src='https://test.ashianafresh.com/assets/media/attachments/public/64a/39a/5e7/thumb_4_0_0_contain_48a4b15e.jpg'
            alt='Slide 2'
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src='https://test.ashianafresh.com/assets/media/attachments/public/64a/39a/669/thumb_5_0_0_contain_48a4b15e.jpg'
            alt='Slide 3'
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src='https://test.ashianafresh.com/assets/media/attachments/public/64a/39a/a14/thumb_10_0_0_contain_48a4b15e.jpg'
            alt='Slide 3'
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src='https://test.ashianafresh.com/assets/media/attachments/public/64f/4d3/f39/thumb_18_0_0_contain_48a4b15e.jpg'
            alt='Slide 3'
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carasol;
