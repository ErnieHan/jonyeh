import React from "react";

class ProjectImgTwo extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="project-img-two">
        <div className="pi-two">
          <img src={require(`../../Assets/${props.img01}`)} alt="" />
        </div>
        <div className="pi-two">
          <img src={require(`../../Assets/${props.img02}`)} alt="" />
        </div>
      </div>
    );
  }
}

ProjectImgTwo.defaultProps = {
  img01: "slider0.jpg",
  img02: "slider1.jpg"
};

export default ProjectImgTwo;
