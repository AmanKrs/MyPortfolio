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

export default function About() {
  const [open, setOpen] = useState(false);

  const handleItem = () => {
    console.log("bc", open);
    setOpen(true);
    console.log("ac", open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("hc", open);
  };

  return (
    <>
      <div>
        <header className="header">
          <h1>About Me</h1>
          <hr className="page-title-hr"></hr>
        </header>
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
        <div className="service">
          <h2>hello</h2>
          <div className="service-grid">
            <div className="service-item" onClick={handleItem}>
              1st container
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>"How are you?"</DialogTitle>
              <DialogContent>
                <Typography>I am Good, Hope the same for you!</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            <div className="service-item">
              {open ? (
                <>
                  <div>
                    hello{" "}
                    <Button onClick={handleClose} color="primary" autoFocus>
                      Close
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div>close</div>
                </>
              )}
            </div>
            <div className="service-item">1st container</div>
            <div className="service-item">1st container</div>
          </div>
        </div>
      </div>
    </>
  );
}
