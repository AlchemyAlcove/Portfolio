import Headshot from "../../../assets/images/headshot.png";
import React from "react";
import Style from "./profile.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends React.Component {
  render() {
    return(
      <Style id="profile">
        <div className="profile-container">
          <h2 className="section-title">Personal Info</h2>
          <h3 className="section-sub-title">Full-stack Web Developer</h3>
          <div className="details">
            <h4>Details</h4>
	    <a className="detail" href="tel:2145644571">
              <div className="detail-title"><FontAwesomeIcon icon={["fas", "phone"]}/></div>
              <div className="detail-value">(214) 564-4571</div>
            </a>
            <a className="detail" href="mailto:mike.hoffert@gmail.com">
              <div className="detail-title"><FontAwesomeIcon icon={["fas", "envelope"]}/></div>
              <div className="detail-value">mike.hoffert@gmail.com</div>
            </a>
            <a className="detail"href="https://www.google.com/maps/place/Lehi,+UT/" target="_blank">
              <div className="detail-title"><FontAwesomeIcon icon={["fas", "map-marker-alt"]}/></div>
              <div className="detail-value">Lehi, UT</div>
            </a>
            <a className="detail" href="https://mikehoffert.com" target="_blank">
              <div className="detail-title"><FontAwesomeIcon icon={["fab", "chrome"]}/></div>
              <div className="detail-value">mikehoffert.com</div>
            </a>
            <a className="detail" href="https://github.com/mahcloud" target="_blank">
              <div className="detail-title"><FontAwesomeIcon icon={["fab", "github"]}/></div>
              <div className="detail-value">mahcloud</div>
            </a>
            <a className="detail" href="https://twitter.com/mahcloud" target="_blank">
              <div className="detail-title"><FontAwesomeIcon icon={["fab", "twitter"]}/></div>
              <div className="detail-value">mahcloud</div>
            </a>
            <a className="detail" href="https://linkedin.com/in/mahcloud" target="_blank">
              <div className="detail-title"><FontAwesomeIcon icon={["fab", "linkedin"]}/></div>
              <div className="detail-value">mahcloud</div>
            </a>
          </div>
          <div className="profile-image">
            <img src={Headshot}/>
          </div>
          <div className="about">
            <h4>About me</h4>
            <p>I started programming at the age of 10 in Houston, Texas. I'm a father of 4. I love playing games like Starcraft and Final Fantasy 7. I believe all of life's problems can be simplified and answered. That's why I love programming. Solving problems and making lives better is what I live for.</p>
          </div>
        </div>
      </Style>
    );
  }
}

export default Profile;
