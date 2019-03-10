import React from "react";
import Slider from "react-slick";

class AboutSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500
    };
    return (
      <div>
        <Slider {...settings} className="about-slider">
          <div>
            <img src={require("../../Assets/slider0.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../Assets/slider1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../Assets/slider2.jpg")} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default AboutSlider;
