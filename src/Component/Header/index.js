import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        {console.log(process.env.PUBLIC_URL)}
        <div className="header-l">
          <h2>
            Johnathan
            <br />
            Website
          </h2>
        </div>
        <div className="header-r">
          <ul>
            <Link to="/" href="/">
              <li
                style={{
                  color: window.location.hash === "#/" ? "#60a3bc" : "black"
                }}
              >
                about
              </li>
            </Link>
            <Link to="work">
              <li
                style={{
                  color: window.location.hash.includes("work")
                    ? "#60a3bc"
                    : "black"
                }}
              >
                work
              </li>
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
