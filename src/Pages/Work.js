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
        <ProjectTitle>Psychological tactics in marketing</ProjectTitle>
        <Intro />
        <ProjectImgOne />
        <ProjectContent
          number="#01"
          title="Psychological tactics. Color"
          page="01"
        >
          <p>
            One of the most common psychological tactics in marketing is the
            application of color, which can be explained by the fact that
            customers’ personal preferences and context are often associated
            with particular colors and the effect these colors have om them. The
            yellow color, which is used for the promotion of products that evoke
            pleasure, is associated with the feelings of optimism and happiness.
            For example, the logo of National Geographic is yellow since
            observing nature and animals is interesting and evokes joy
            (Ciotti)...
          </p>
        </ProjectContent>
        <ProjectImgTwo />
        <ProjectContent
          number="#02"
          title="Psychological Tactic. Shape"
          page="02"
        >
          <p>
            Similarly to colors, many good marketers use the psychological
            tactic of shape. They are aware of various messages hidden in shapes
            and wisely apply these (Pahwa). Therefore, the most popular shapes
            that can be observed almost everywhere are four-sided structures.
            Most of their time people spend in a four-walled room. Obviously,
            the straight lines of four-sided structures have already formed
            their meanings in people’s minds. These structures are associated
            with trust, stability, honesty, rationality, order, and security...
          </p>
        </ProjectContent>
        <ProjectImgOne />
        <ProjectContent
          number="#03"
          title="Psychological Tactic. Sponsorship & Influencer"
          page="03"
        >
          <p>
            Sponsorship is a psychological tactic considering a certain brand to
            provide money in exchange for being represented in an event, podcast
            or webinar. Many brands aim to increase their credibility by
            applying this tactic. For example, Coca-Cola is always sponsoring
            various events (Hussain). Therefore, the company aims to generate a
            positive idea of their products among its consumers. "American Idol"
            television show is regularly supported by the company since it
            believes that in such a way it can influence consumers’ opinions...
          </p>
        </ProjectContent>
        <ProjectContent
          number="#04"
          title="Psychological Tactic. Incentivisation"
          page="04"
        >
          <p>
            Incentivisation is the psychological tactic widely used by marketers
            to promote their products and services effectively. Hence, various
            rewards and incentives are used to make customers take an action
            (Leary). Many companies offer free products, guides, and other
            freebies to establish contact with their target audience. For
            example, very often consumers can get free spoons with cereals or
            tea or one extra bottle of beer in addition to the whole pack
            (Leary)...
          </p>
        </ProjectContent>
      </div>
    );
  }
}

export default Work;
