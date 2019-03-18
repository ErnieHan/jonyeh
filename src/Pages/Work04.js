import React from "react";
import ProjectTitle from "../Component/ProjectTitle";
import ProjectImgTwo from "../Component/ProjectImgTwo";
import ProjectImgOne from "../Component/ProjectImgOne";
import { Link } from "react-router-dom";

class Work04 extends React.Component {
  componentDidMount = () => {
    console.log(window.pageYOffset);
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="work-pages">
        <ProjectTitle>Psychological Tactic. Reward</ProjectTitle>
        <ProjectImgOne img="incentive.jpg" />
        <div>
          <p>
            Incentivisation is the psychological tactic widely used by marketers
            to promote their products and services effectively. Hence, various
            rewards and incentives are used to make customers take an action
            (Leary). Many companies offer free products, guides, and other
            freebies to establish contact with their target audience. For
            example, very often consumers can get free spoons with cereals or
            tea or one extra bottle of beer in addition to the whole pack
            (Leary). Usually, customers do not understand that the price of this
            free product is already included in the main one. Moreover, usually,
            free products are of lower quality that the main one. Marketers
            understand people’s nature of greediness and use this for promoting
            their business.
          </p>
          <ProjectImgOne img="reward.jpg" />
          <p>
            Gamification remains a psychological tactic that considers game
            application into content to engage one’s target audience. It can be
            widely used in different applications, quizzes, advertisements, and
            socials media sites. Gamification is believed to increase brand
            awareness, collect insights, and attract consumers (Hussain). It
            concerns implementation of various elements of the game such as
            challenges, milestones and rewards to communicate with consumers
            more effectively. For instance, McDonald’s uses gamification for the
            promotion of its brand. It gives the customer an opportunity to win
            different goods for free and, as a result, they remain more
            interested in the company. Gamification also creates a sense of
            achievement and evokes peoples’ competitive nature to encourage them
            to use a targeted website or application.
          </p>
        </div>
        <div className="work-page-changepage2">
          <Link to="/work03">
            <span style={{ textDecoration: "underline" }}>{"<<"}Prev</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work04;
