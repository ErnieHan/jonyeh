import React from "react";
import { Link } from "react-router-dom";

const ReadMore = props => {
  return (
    <div className="readmore">
      <Link to={`/work${props.page}`}>
        <a>Read More >> </a>
      </Link>
    </div>
  );
};

export default ReadMore;
