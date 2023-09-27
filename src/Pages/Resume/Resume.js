import React from "react";
import "./resume.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Tooltip from "@mui/material/Tooltip";
import { mySkills, myExperience, myEducation } from "../../data/SkillData";
export default function Resume() {
  return (
    <div>
      <header className="header">
        <h1>Resume</h1>
        <hr className="page-title-hr"></hr>
      </header>
      <section>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>Experience</h3>
        </div>
        {myExperience.map((elem, index) => {
          return (
            <>
              <div className="sub-content" key={index}>
                <div className="epx-item1">
                  <h3 className="epxcompany">{elem.company}</h3>
                </div>
                <p className="p-span">Sep-2019 - Present</p>
                <hr className="item-separator" />
                <div className="epx-role-work">
                  <ul className="stepper-ul">
                    {elem.details.map((exp, expkey) => {
                      return (
                        <>
                          <li className="epx-stepper-li" key={expkey}>
                            {exp}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </section>
      <section>
        <div className="experience">
          <SchoolIcon style={{ fontSize: "30px" }} />
          <h3>Education</h3>
        </div>
        <ol className="stepper-ul">
          {myEducation.map((edu, edukey) => {
            return (
              <>
                <li className="stepper-li">
                  <div className="epx-item1">
                    <h3 className="eduInstitute">{edu.institute} </h3>
                    <span className="periodspan">{edu.period}</span>
                  </div>
                  <p className="edudetail">
                    <span>
                      {edu.degree}: {edu.sub}
                    </span>
                    <span>
                      {edu.passout} | Per : {edu.percentage}
                    </span>
                  </p>
                </li>
              </>
            );
          })}
        </ol>
      </section>
      <section>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>SKILLS</h3>
        </div>
        <div className="skillBox">
          <div className="skillsContainer">
            {mySkills.map((skill, index) => {
              return (
                <>
                  <div className="iconContainer" key={index}>
                    <Tooltip
                      title={
                        <div>
                          <p className="progress-title">
                            <span>Score</span>
                            <span>{skill.score}%</span>
                          </p>
                          <progress
                            id="file"
                            value={skill.score}
                            max="100"
                            style={{ accentColor: "#ffb400" }}
                          />
                        </div>
                      }
                      placement="right-end"
                    >
                      <img
                        src={skill.img}
                        alt="skillImage"
                        className="skillIcon"
                      />
                    </Tooltip>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>ACCOMPLISHMENTS</h3>
        </div>
        <div className="accomplish">
          <li className="epx-stepper-li">
            Received Best team award for the successful delivery to production.
          </li>
          <li className="epx-stepper-li">Received Star of the Month Award.</li>
        </div>
      </section>
    </div>
  );
}
