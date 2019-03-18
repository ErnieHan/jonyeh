import React from "react";
import ProjectTitle from "../Component/ProjectTitle";
import ProjectImgTwo from "../Component/ProjectImgTwo";
import ProjectImgOne from "../Component/ProjectImgOne";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

class Work03 extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="work-pages">
        <MetaTags>
          <title>
            Psychological Tactic. Sponsorship & Influencer | Johnathan Yeh
            Website
          </title>
          <meta
            name="description"
            content="Sponsorship is a psychological tactic considering a certain brand to
            provide money in exchange for being represented in an event, podcast
            or webinar. Many brands aim to increase their credibility by
            applying this tactic. For example, Coca-Cola is always sponsoring
            various events (Hussain). Therefore, the company aims to generate a
            positive idea of their products among its consumers."
          />
        </MetaTags>
        <ProjectTitle>
          Psychological Tactic. Sponsorship & Influencer
        </ProjectTitle>
        <ProjectImgOne img="sponsorship.jpg" />
        <div>
          <p>
            Sponsorship is a psychological tactic considering a certain brand to
            provide money in exchange for being represented in an event, podcast
            or webinar. Many brands aim to increase their credibility by
            applying this tactic. For example, Coca-Cola is always sponsoring
            various events (Hussain). Therefore, the company aims to generate a
            positive idea of their products among its consumers. "American Idol"
            television show is regularly supported by the company since it
            believes that in such a way it can influence consumers’ opinions.
            Football fans can often see football players in T-shirts with logos
            of different brands, such as Chevrolet, Jeep, and Adidas. It does
            not mean that these players use these brands, they are just payed
            money for advertising them during the match. Nevertheless, the
            psychological tactic of sponsorship remains effective due to the
            fact that it impacts consumers.
          </p>

          <ProjectImgTwo img01="spon01.jpg" img02="spon02.jpg" />
          <p>
            Endorsement- Influencer is another psychological tactic that
            considers someone famous to provide a positive review in regard to a
            certain brand, product, or service. Common contents include
            advertisements, emails, and various web pages (Hussain). Usually,
            celebrities who are associated with physical and mental beauty
            propel the brand to similar success. Celebrities occur in various
            marketing channels such as TVs, radios, and the Internet. Hence,
            they can effectively promote the product and enhance the brand’s
            reputation accordingly. For example, Celena Gomes often advertises
            various goods, including bags, cosmetics, and cloths. She is famous
            among a wide audience of teenagers and adults. Hence, in order to be
            attractive like the celebrity, many girls buy products she
            advertises.
          </p>
        </div>
        <div className="work-page-changepage2">
          <Link to="/work02">
            <span style={{ textDecoration: "underline" }}>{"<<"}Prev</span>
          </Link>
          <Link to="/work04">
            <span style={{ textDecoration: "underline" }}>Next>></span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work03;
