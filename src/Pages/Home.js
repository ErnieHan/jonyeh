import React from "react";
// import AboutSlider from "../Component/AboutSlider";
import AboutSection1 from "../Component/AboutSection1";
import AboutSection2 from "../Component/AboutSection2";
// import AboutSection3 from "../Component/AboutSection3";
import AboutSection2Mobile from "../Component/AboutSection2Mobile";
import MetaTags from "react-meta-tags";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>About | Johnathan Yeh Website</title>
          <meta name="description" content="I am an international business major and accounting minor student, I have interacted with various pieces of information that relate to finance, customers, communication and business. The knowledge I have gained from this academic milieu has even assured me of my ability to excel in any business endeavor." />
        </MetaTags>
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
