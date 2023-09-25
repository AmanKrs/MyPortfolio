import React, { useState } from "react";
import "./about.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { myIntro, myHobbies, myRoles } from "../../data/aboutData";
import vscode from "../../assets/icon/vscode.svg";
import dep from "../../assets/icon/agile.png";
import techsup from "../../assets/icon/techspprt.png";
import study from "../../assets/icon/study.svg";
export default function About() {
  const [openItem1, setOpenItem1] = useState(false);
  const [openItem2, setOpenItem2] = useState(false);
  const [openItem3, setOpenItem3] = useState(false);
  const [openItem4, setOpenItem4] = useState(false);

  const handleItem1 = () => {
    setOpenItem1(true);
  };
  const handleItem2 = () => {
    setOpenItem2(true);
  };
  const handleItem3 = () => {
    setOpenItem3(true);
  };
  const handleItem4 = () => {
    setOpenItem4(true);
  };

  const handleClose = () => {
    setOpenItem1(false);
    setOpenItem2(false);
    setOpenItem3(false);
    setOpenItem4(false);
  };

  return (
    <>
      <div className="aboutContainer">
        <header className="header">
          <h1>About Me</h1>
          <hr className="page-title-hr"></hr>
        </header>
        <h2>Introduction</h2>
        <div className="a-summary">
          <p>{myIntro.summary}</p>
        </div>
        <h2>Roles and Responsibilites</h2>
        <div className="service-grid">
          <div className="info-item" onClick={handleItem1}>
            <div className="info-icon">
              <DeveloperModeIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Frontend Developer</h3>
              <p>
                Developing a web-based app components using React.Js using...
              </p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem2}>
            <div className="info-icon">
              <TerminalOutlinedIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Deployment Developer</h3>
              <p>Design and implementation of Jenkins jobs that execute ...</p>
            </div>
          </div>

          <div className="info-item" onClick={handleItem3}>
            <div className="info-icon">
              <LogoDevOutlinedIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Technical Support</h3>
              <p>
                Configuring Application Server using JBoss Application Server...
              </p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem4}>
            <div className="info-icon">
              <LocalLibraryIcon sx={{ fontSize: "45px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Self-Learning</h3>
              <p>
                I am constantly eager to learn new technology. To accomplish my
                aim ...
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <h2>Hobbies</h2>

        <div className="hobbie">
          <div className="hobbie-crousel">
            {myHobbies.map((elem, index) => {
              return (
                <>
                  <div className="hobbies-item" key={index}>
                    <figure className="hobbie-icon-container">
                      <img
                        src={elem.img}
                        className="hobbie-icon"
                        alt="hobbieImage"
                      />
                    </figure>
                    <div className="hobbie-details">
                      <h3>{elem.name}</h3>
                      <p>{elem.details}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <Dialog open={openItem1} onClose={handleClose} className="dialogBox">
          <div className="openDialog">
            <div className="dialogContent">
              <img src={vscode} className="dialog-icon" alt="dialogImage" />

              <p>{myRoles.item1}</p>
            </div>
            <CancelIcon onClick={handleClose} className="closeDialogbtn" />
          </div>
        </Dialog>
        <Dialog open={openItem2} onClose={handleClose} className="dialogBox">
          <div className="openDialog">
            <div className="dialogContent">
              <img src={dep} className="dialog-icon" alt="dialogImage" />
              <p>{myRoles.item2}</p>
            </div>
            <CancelIcon onClick={handleClose} className="closeDialogbtn" />
          </div>
        </Dialog>
        <Dialog open={openItem3} onClose={handleClose} className="dialogBox">
          <div className="openDialog">
            <div className="dialogContent">
              <img src={techsup} className="dialog-icon" alt="dialogImage" />
              <p>{myRoles.item3}</p>
            </div>
            <CancelIcon onClick={handleClose} className="closeDialogbtn" />
          </div>
        </Dialog>
        <Dialog open={openItem4} onClose={handleClose} className="dialogBox">
          <div className="openDialog">
            <div className="dialogContent">
              <img src={study} className="dialog-icon" alt="dialogImage" />
              <p>{myRoles.item4}</p>
            </div>
            <CancelIcon onClick={handleClose} className="closeDialogbtn" />
          </div>
        </Dialog>
      </div>
    </>
  );
}
