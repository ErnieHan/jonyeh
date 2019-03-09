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
            <img
              src="https://twice.erniexx.website/static/media/slick-02.852a0e89.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://twice.erniexx.website/static/media/slick-04.58022bcc.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://twice.erniexx.website/static/media/slick-06.16be2048.svg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default AboutSlider;
