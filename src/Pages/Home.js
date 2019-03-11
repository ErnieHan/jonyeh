import React from "react";
import AboutSlider from "../Component/AboutSlider";
import AboutSection1 from "../Component/AboutSection1";
import AboutSection2 from "../Component/AboutSection2";
import AboutSection3 from "../Component/AboutSection3";

class Home extends React.Component {
  render() {
    return (
      <div>
        <AboutSection2 />
        <AboutSection1 />
        <AboutSlider />
        <AboutSection3 />
      </div>
    );
  }
}

export default Home;
