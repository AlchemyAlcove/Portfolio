import Blog from "./index/blog";
import Education from "./index/education";
import Experience from "./index/experience";
import Profile from "./index/profile";
import React from "react";
import Top from "./index/top";

class IndexPage extends React.Component {
  render() {
    return(
      <div className="index-page">
        <Top/>
        <Profile/>
        <Education/>
        <Experience/>
        <Blog/>
      </div>
    );
  }
}

export default IndexPage;
