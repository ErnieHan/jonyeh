import React from "react";
import { Link } from "react-router-dom";

const ReadMore = () => {
  return (
    <div className="readmore">
      <Link to="work/01">
        <a>Read More >> </a>
      </Link>
    </div>
  );
};

export default ReadMore;
