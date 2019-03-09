import React from "react";
import { LayoutDiv } from "./Layout.css.js";

class Layout extends React.Component {
  render() {
    const props = this.props;
    return <LayoutDiv>{props.children}</LayoutDiv>;
  }
}

export default Layout;
