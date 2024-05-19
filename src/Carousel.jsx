import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame from "./Components/images/Frame.png";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="frame-1">
      <div id="frame-2">
        <Slider {...settings}>
          <div>
            <img src={Frame} alt="" srcset="" />
          </div>
          <div>
            <img src={Frame} alt="" srcset="" />
          </div>
          <div>
            <img src={Frame} alt="" srcset="" />
          </div>
          <div>
            <img src={Frame} alt="" srcset="" />
          </div>
          <div>
            <img src={Frame} alt="" srcset="" />
          </div>
          <div>
            <img src={Frame} alt="" srcset="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
