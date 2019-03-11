import React from "react";

class ProjectContent extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="project-content">
        <div className="pc-l">{props.number}</div>
        <div className="pc-r">
          <h2>{props.title}</h2>
          {props.children}
        </div>
      </div>
    );
  }
}

export default ProjectContent;
