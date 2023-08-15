import React, { useState } from "react";
import "./about.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import camera from "../../Images/camera.png";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";
import { FolderGit2 } from "lucide-react";

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
      <div>
        <header className="header">
          <h1>About Me</h1>
          <hr className="page-title-hr"></hr>
        </header>
        <h2>Introduction</h2>
        <div className="a-summary">
          <p>
            Enthusiastic Computer Science Engineer with 3.5 years of experience
            in TCS, eager to contribute to team success with Skilled in HTML,
            React.JS, JavaScript, DevOps, CI/CD Tools, Docker, AWS services, and
            a fast learner with creative problem-solving skills, and good
            communication skills looking for a responsible position to gain
            practical experience.
          </p>
        </div>
        <h2>Roles and Responsibilites</h2>
        <div className="service-grid">
          <div className="info-item" onClick={handleItem1}>
            <div className="info-icon">
              <DeveloperModeIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Frontend Developer</h3>
              <p>building as api performance dashboard</p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem2}>
            <div className="info-icon">
              <FolderGit2 size={40} color="red" />
            </div>
            <div className="info-details">
              <h3>Deployment Architecture</h3>
              <p>
                architecting, designing, and implementing Jenkins jobs that
                execute Shell scripts for automation with Pipeline.
              </p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem3}>
            <div className="info-icon">
              <TerminalOutlinedIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Deployment Developer</h3>

              <p>
                Creating shell-script for automation and get relief from manual
                efforts
              </p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem4}>
            <div className="info-icon">
              <LogoDevOutlinedIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Technical Support</h3>
              <p>creating jobs , performance testing for APIs using Jmeter</p>
            </div>
          </div>
        </div>
        <br></br>
        <h2>Hobbies</h2>
        <br></br>
        <br></br>
        <div className="hobbie">
          <div className="hobbie-crousel">
            <div className="hobbies-item">
              <div className="hobbie-icon-container">
                <img src={camera} className="hobbie-icon" />
              </div>
              <div className="hobbie-details">
                <h3>Photography</h3>
                <p>
                  I love taking picture, Also handling a instagram page named
                  @akpicso
                </p>
              </div>
            </div>
            <div className="hobbies-item">
              <div className="hobbie-icon-container">
                <img src={camera} className="hobbie-icon" />
              </div>
              <div className="hobbie-details">
                <h3>Frontend Developer</h3>
                <p>building as api performance dashboard</p>
              </div>
            </div>
            <div className="hobbies-item">
              <div className="hobbie-icon-container">
                <img src={camera} className="hobbie-icon" />
              </div>
              <div className="hobbie-details">
                <h3>Frontend Developer</h3>
                <p>building as api performance dashboard</p>
              </div>
            </div>
            <div className="hobbies-item">
              <div className="hobbie-icon-container">
                <img src={camera} className="hobbie-icon" />
              </div>
              <div className="hobbie-details">
                <h3>Frontend Developer</h3>
                <p>building as api performance dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={openItem1} onClose={handleClose}>
          <div>item1</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
        <Dialog open={openItem2} onClose={handleClose}>
          <div>item2</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
        <Dialog open={openItem3} onClose={handleClose}>
          <div>item3</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
        <Dialog open={openItem4} onClose={handleClose}>
          <div>item4</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
      </div>
    </>
  );
}
