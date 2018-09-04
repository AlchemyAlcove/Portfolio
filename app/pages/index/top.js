import React from "react";
import Style from "./top.style";

class Top extends React.Component {
  render() {
    return(
      <Style id="top">
        <div className="top-stripe">
          <h1>Mike Hoffert</h1>
          <p className="lead">Web Developer</p>
        </div>
      </Style>
    );
  }
}

export default Top;
