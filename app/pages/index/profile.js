import Headshot from "../../../assets/images/headshot.png";
import React from "react";
import Style from "./profile.style";

class Profile extends React.Component {
  render() {
    return(
      <Style id="profile">
        <div className="profile-container">
          <h2 className="section-title">Profile</h2>
          <h3 className="section-sub-title">Full-stack Web Developer</h3>
          <div className="details">
            <h4>Details</h4>
            <div className="detail">
              <div className="detail-title">Name:</div>
              <div className="detail-value">Mike Hoffert</div>
            </div>
            <div className="detail">
              <div className="detail-title">Age:</div>
              <div className="detail-value">33</div>
            </div>
            <div className="detail">
              <div className="detail-title">Location:</div>
              <div className="detail-value">Lehi, UT</div>
            </div>
          </div>
          <div className="profile-image">
            <img src={Headshot}/>
          </div>
          <div className="about">
            <h4>About me</h4>
            <p>I started programming at the age of 10 in Houston, Texas. I'm a father of 4. I love playing games like Starcraft and Final Fantasy 7. I believe all of life's problems can be simplified and answered. That's why I love programming. Solving problems and making lives better is what I live for.</p>
            <h4 className="email">Email</h4>
            <p>mike.hoffert@gmail.com</p>
          </div>
        </div>
      </Style>
    );
  }
}

export default Profile;
