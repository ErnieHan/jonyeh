import React from "react";

class Intro extends React.Component {
  state = {
    openIntro: false
  };
  render() {
    return (
      <div className="Intro">
        <div className="intro-l">{""}</div>
        <div
          className="intro-r"
          style={{ maxHeight: this.state.openIntro ? "1000px" : "390px" }}
        >
          <h2>Intro</h2>
          <p>
            To help marketing remain effective, a number of psychological
            advances, contributing to the development of numerous marketing
            tactics, have been applied. Using psychological knowledge, marketers
            can understand consumers’ behavior, their needs, desires, and
            preferences. Such an awareness, can help them create an appropriate
            product and distribute it effectively. Marketing psychology often
            studies the motives of their consumers to identify what people want
            to see on the market (Clare). Hence, they use different
            psychological tactics to affect the customer to purchase a certain
            product. For instance, it is always not difficult to remember
            numbers shown in advertisements (Clare). It can be explained that
            marketers use a special number pattern for easier remembering of
            these numbers. Nevertheless, human psychology is far from being
            fully studied and marketing psychology has much more to offer.
          </p>
        </div>
        <div
          style={{ width: "100%", textAlign: "right" }}
          className="intro-btn-div"
        >
          <button
            className="intro-btn"
            onClick={() =>
              this.setState({
                openIntro: !this.state.openIntro
              })
            }
          >
            more
          </button>
        </div>
      </div>
    );
  }
}

export default Intro;
