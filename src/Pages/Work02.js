import React from "react";
import ProjectTitle from "../Component/ProjectTitle";
import ProjectImgTwo from "../Component/ProjectImgTwo";
import ProjectImgOne from "../Component/ProjectImgOne";
import { Link } from "react-router-dom";

class Work02 extends React.Component {
  componentDidMount = () => {
    console.log(window.pageYOffset);
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="work-pages">
        <ProjectTitle>Psychological Tactic. Shape</ProjectTitle>
        <ProjectImgTwo img01="shape01.jpg" img02="shape02.jpg" />
        <div>
          <p>
            Similarly to colors, many good marketers use the psychological
            tactic of shape. They are aware of various messages hidden in shapes
            and wisely apply these (Pahwa). Therefore, the most popular shapes
            that can be observed almost everywhere are four-sided structures.
            Most of their time people spend in a four-walled room. Obviously,
            the straight lines of four-sided structures have already formed
            their meanings in people’s minds. These structures are associated
            with trust, stability, honesty, rationality, order, and security.
            One more shape that is the leader in marketing is the triangle
            (Pahwa). It is believed to be energetic and focused. Moreover, it
            tends to depict dynamics, action, strength, balance, and direction
            (Pahwa). When placed on its base, they depict stability, thus in
            case they are tilted, instability and tension are depicted.
          </p>
          <ProjectImgOne img="shape03.jpg" />
          <p>
            One more figure used in marketing psychology is a circle. Various
            eternal and spiritual things are usually associated with the circle.
            For example, the sun, moon or universe are enclosed like a circle
            (Pahwa). They depict love, movement, eternity, protection, and
            mysteriousness are depicted by the circles. For example Google
            Chrome is a circle that includes a wide variety of services and
            valuable access to world wide web. Besides, despite the fact that
            these shapes are less common, they attract the attention of the
            customer more effectively. Another shape is curve that is associated
            with happiness. They remain creative and generous (Pahwa). Curves
            tend to have a certain rhythm and encourage the pleasure of viewing.
          </p>
        </div>
        <div className="work-page-changepage2">
          <Link to="/work01">
            <span style={{ textDecoration: "underline" }}>{"<<"}Prev</span>
          </Link>
          <Link to="/work03">
            <span style={{ textDecoration: "underline" }}>Next>></span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work02;
