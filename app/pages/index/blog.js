import React from "react";
import Style from "./blog.style";

class Blog extends React.Component {
  render() {
    return(
      <Style id="blog">
        <div className="blog-container">
          <h2 className="section-title">Blog</h2>
        </div>
      </Style>
    );
  }
}

export default Blog;
