import React from "react";

class ProjectImgOne extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="project-img-one">
        <img src={require(`../../Assets/${props.img}`)} alt="" />
      </div>
    );
  }
}

ProjectImgOne.defaultProps = {
  img: "slider0.jpg"
};

export default ProjectImgOne;
