import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import "./project.css";

import projectDetails from "../../data/projectData";

export default function Project() {
  const [activeItem, setActiveItem] = useState("All");

  const items = ["All", "Basic", "Web App", "React", "MERN"];

  const navigate = useNavigate();
  const handleProject = (elem) => {
    setActiveItem(elem);
  };

  return (
    <div>
      <header className="header">
        <h1>Project</h1>
        <hr className="page-title-hr"></hr>
      </header>

      <nav className="projectNav">
        {items.map((elem, index) => {
          return (
            <>
              <div
                key={index}
                className={`projectType ${
                  activeItem === elem ? "activeProj" : ""
                }`}
                onClick={() => {
                  handleProject(elem);
                }}
              >
                {elem}
              </div>
            </>
          );
        })}
      </nav>
      <section className="projectBody">
        {projectDetails.map((elem, key) => {
          console.log(key);
          if (elem.type == activeItem) {
            return (
              <>
                <div className="card" key={key}>
                  <div className="card-view">
                    <img
                      src={elem.image}
                      className="card-img"
                      alt="ProjectImage"
                    />
                    <div className="displayProj">
                      <a href={elem.siteurl} target="_blank">
                        <VisibilityIcon
                          style={{ fontSize: "40px" }}
                          className="eye"
                        />
                      </a>
                      <a href={elem.giturl} target="_blank">
                        <GitHubIcon
                          style={{ fontSize: "40px" }}
                          className="axy"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="crd-p-typ">
                    <span className="p-typ">{elem.type}</span>
                  </div>
                  <div className="card-detail">
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>
                    <div className="card-more">
                      <span>Learn More </span>
                    </div>
                  </div>
                </div>
              </>
            );
          } else if (activeItem == "All") {
            return (
              <>
                <div className="card" key={key}>
                  <div className="card-view">
                    <img src={elem.image} className="card-img" />
                    <div className="displayProj">
                      <a href={elem.siteurl} target="_blank">
                        <VisibilityIcon
                          style={{ fontSize: "40px" }}
                          className="eye"
                        />
                      </a>
                      <a href={elem.giturl} target="_blank">
                        <GitHubIcon
                          style={{ fontSize: "40px" }}
                          className="axy"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="crd-p-typ">
                    <span className="p-typ">{elem.type}</span>
                  </div>
                  <div className="card-detail">
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>

                    <div className="card-more">
                      <span>Learn More </span>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </section>
    </div>
  );
}
