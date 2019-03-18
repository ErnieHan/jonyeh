import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="mailto:Jonathanyeh2015@gmail.com" className="jon-email-dk">
          Jonathanyeh2015@gmail.com
        </a>
        <span style={{ marginLeft: "5px" }}>+1 (714) 686-7735</span>
        <a href="mailto:Jonathanyeh2015@gmail.com" className="jon-email-mb">
          <i className="fas fa-envelope" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100000231678778">
          <i className="fab fa-facebook-square" />
        </a>
        <a href="https://www.google.com.tw">
          <i className="fab fa-twitter-square" />
        </a>
        <a href="https://www.instagram.com/jonyeh12/">
          <i className="fab fa-instagram" />
        </a>
      </footer>
    );
  }
}

export default Footer;
