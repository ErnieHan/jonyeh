import React from "react";
import ProjectTitle from "../Component/ProjectTitle";
import ProjectImgTwo from "../Component/ProjectImgTwo";
import ProjectImgOne from "../Component/ProjectImgOne";
import { Link } from "react-router-dom";

class Work01 extends React.Component {
  componentDidMount = () => {
    console.log(window.pageYOffset);
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="work-pages">
        <ProjectTitle>Psychological tactics. Color</ProjectTitle>
        <ProjectImgOne img="color.jpg" />
        <div>
          <p>
            One of the most common psychological tactics in marketing is the
            application of color, which can be explained by the fact that
            customers’ personal preferences and context are often associated
            with particular colors and the effect these colors have om them. The
            yellow color, which is used for the promotion of products that evoke
            pleasure, is associated with the feelings of optimism and happiness.
            For example, the logo of National Geographic is yellow since
            observing nature and animals is interesting and evokes joy (Ciotti).
            Red color refers to powerful emotions. It is also considered to
            encourage appetite, which is typical for fact food advertisement
            (Ciotti). Coca-Cola and Skittles attract their customer by bright
            red colors of their logos. The green color is easily perceived by
            people and used when promoting various organic and health sales. For
            instance, the majority of pharmacies in their logos, use green color
            that refers to health. Everybody wants to remain healthy, and,
            obviously, in case of the disease go to such an institution.
          </p>
          <ProjectImgTwo img01="color01.jpg" img02="color02.jpg" />
          <p>
            The orange color is widely used by numerous advertising campaigns.
            It is associated with warmth and sun, fun (Ciotti). It is also
            believed that people consider this color to be “cheap.” This color
            is often used in products targeting kids. Orange especially catches
            their attention. For example, kids like Fanta due to the orange
            splashes shown in the advertising campaign (Ciotti). Blues color is
            associated with water, peace, and loyalty. It tends to provide a
            sense of security and promotes trust in the brand. It also
            stimulates productivity and, as a result, is used mainly for offices
            and conservative corporate brands (Ciotti). A number of IT
            corporations such as Facebook, Twitter, Skype, Siemens, and Samsung
            use this color for the promotion of their products and services. In
            this case, blue refers to a feeling of reliability.
          </p>

          <p>
            The purple color refers to royalty, wisdom, creativity, and magic.
            It stands between the color psychologies of red and blue colors.
            Hence, while red is associated with energy and intensity, blue
            brings feelings of stability and relaxation. According to color
            psychology, purple color has calming effects and can encourage
            creativity. Usually, brands that see their position as prestigious
            use such a color (Ciotti). The black color is widely used by
            marketing campaigns since it refers to power and luxury. Hence,
            numerous prosperous brands use this color. For example, such brands
            as Chanel, Apple, Nike, LG, Ander Armor apply the psychology of this
            color to make their customer be sure of their stable position on the
            market.
          </p>
        </div>
        <div className="work-page-changepage">
          <Link to="/work02">
            <span style={{ textDecoration: "underline" }}>Next>></span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work01;
