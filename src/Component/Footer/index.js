import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        +886-912-345-678
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
