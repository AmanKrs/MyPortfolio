import React, { useState } from "react";
import "./sidenav.css";
import avatar from "../../assets/avatar.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ExpCount from "../ExpCounter/ExpCount";

export default function Sideview() {
  const [expandInfo, setExpandInfo] = useState(true);

  const handleExpandInfo = () => {
    setExpandInfo(!expandInfo);
    // if (!expandInfo) {
    //   document.getElementById("sidenav").style.height = "0";
    //   setExpandInfo(!expandInfo);
    // } else {
    //   document.getElementById("sidenav").style.height = "100px";
    //   setExpandInfo(!expandInfo);
    // }
  };

  return (
    <div>
      <div className="profile ">
        <figure className="avatar-box">
          <img src={avatar} className="dp" alt="Avatar" />
        </figure>
        <div className="avatar-info">
          <h2 className="myname">AMAN KUMAR</h2>
          <div className="avatar-bio">
            <p>Software Engineer</p>
            <p>Since 2019</p>
          </div>
        </div>
      </div>
      <div className="expandInfo ">
        <button onClick={handleExpandInfo}>exapnad</button>
      </div>
      <div
        className={expandInfo ? "expandAvatarInfo " : "closeExpand "}
        id="sidenav"
      >
        <hr className="info-seperator"></hr>
        <div className="social-profiles ">
          <a
            href="mailto: kumaraman20ak@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon">
              <EmailOutlinedIcon style={{ color: "red" }} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/aman-kumar20/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon">
              <LinkedInIcon style={{ color: "blue" }} />
            </span>
          </a>
          <a href="https://github.com/AmanKrs" target="_blank" rel="noreferrer">
            <span className="social-icon">
              <GitHubIcon style={{ color: "black" }} />
            </span>
          </a>
          <a href="https://wa.me/918804236131" target="_blank" rel="noreferrer">
            <span className="social-icon">
              <WhatsAppIcon style={{ color: "green" }} />
            </span>
          </a>
        </div>
        <hr className="info-seperator"></hr>
        <div className="expcountdiv ">
          <ExpCount />
        </div>
        <a href="../resume/AmanKumar.pdf" target="_blank">
          <button className="downloadCV" id="res">
            Download CV
           
          </button>
        </a>
      </div>
    </div>
  );
}
