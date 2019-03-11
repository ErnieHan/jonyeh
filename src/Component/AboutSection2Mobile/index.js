import React from "react";
import Slider from "react-slick";

class AboutSection2Mobile extends React.Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false
    };
    return (
      <div>
        <Slider {...settings} className="about-slider2">
          <div>
            <img src={require("../../Assets/ss0.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../Assets/ss1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../Assets/ss2.jpg")} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default AboutSection2Mobile;
