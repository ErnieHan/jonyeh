import React from "react";

class ProjectImgTwo extends React.Component {
  render() {
    return (
      <div className="project-img-two">
        <div className="pi-two">
          <img src={require("../../Assets/slider2.jpg")} alt="" />
        </div>
        <div className="pi-two">
          <img src={require("../../Assets/slider3.jpg")} alt="" />
        </div>
      </div>
    );
  }
}

export default ProjectImgTwo;
