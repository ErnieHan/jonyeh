import React from "react";
import ReadMore from "../ReadMore";

class ProjectContent extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="project-content">
        <div className="pc-l">{props.number}</div>
        <div className="pc-r">
          <h2>{props.title}</h2>
          {props.children}
          <ReadMore page={props.page} />
        </div>
      </div>
    );
  }
}

export default ProjectContent;
