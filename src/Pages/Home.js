import React from "react";
// import AboutSlider from "../Component/AboutSlider";
import AboutSection1 from "../Component/AboutSection1";
import AboutSection2 from "../Component/AboutSection2";
// import AboutSection3 from "../Component/AboutSection3";
import AboutSection2Mobile from "../Component/AboutSection2Mobile";

class Home extends React.Component {
  render() {
    return (
      <div>
        <AboutSection2 />
        <AboutSection2Mobile />
        <AboutSection1 />
        {/* <AboutSlider />
        <AboutSection3 /> */}
      </div>
    );
  }
}

export default Home;
