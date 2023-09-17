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
import camera from "../../assets/camera.png";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";
import { myIntro, myHobbies, myRoles } from "../../data/aboutData";

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
              <p>building </p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem2}>
            <div className="info-icon">
              <FolderGit2 size={40} color="red" />
            </div>
            <div className="info-details">
              <h3>Deployment Architecture</h3>
              <p>
                architecting
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
                Creating 
              </p>
            </div>
          </div>
          <div className="info-item" onClick={handleItem4}>
            <div className="info-icon">
              <LogoDevOutlinedIcon sx={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="info-details">
              <h3>Technical Support</h3>
              <p>creating jobs </p>
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
                      <img src={elem.img} className="hobbie-icon" />
                    </figure>
                    <div className="hobbie-details">
                      <h3>{elem.name}</h3>
                      <p>
                        {elem.details}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <Dialog open={openItem1} onClose={handleClose}>
          <div>{myRoles.item1}</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
        <Dialog open={openItem2} onClose={handleClose}>
          <div>{myRoles.item2}</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
        <Dialog open={openItem3} onClose={handleClose}>
          <div>{myRoles.item3}</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
        <Dialog open={openItem4} onClose={handleClose}>
          <div>{myRoles.item4}</div>
          <Button onClick={handleClose}>Close</Button>
        </Dialog>
      </div>
    </>
  );
}
