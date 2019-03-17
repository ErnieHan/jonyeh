import React from "react";
import ProjectTitle from "../Component/ProjectTitle";
import Intro from "../Component/Intro";
import ProjectImgOne from "../Component/ProjectImgOne";
import ProjectContent from "../Component/ProjectContent";
import ProjectImgTwo from "../Component/ProjectImgTwo";

class Work extends React.Component {
  render() {
    return (
      <div>
        <ProjectTitle>Project Title</ProjectTitle>
        <Intro />
        <ProjectImgOne />
        <ProjectContent
          number="#01"
          title="Psychological tactics. Color"
          page="01"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ProjectContent>
        <ProjectImgTwo />
        <ProjectContent
          number="#02"
          title="Psychological Tactic. Shape"
          page="02"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ProjectContent>
        <ProjectImgOne />
        <ProjectContent
          number="#03"
          title="Psychological Tactic. Sponsorship & Influencer"
          page="03"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ProjectContent>
        <ProjectContent
          number="#04"
          title="Psychological Tactic. Incentivisation"
          page="04"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ProjectContent>
      </div>
    );
  }
}

export default Work;
