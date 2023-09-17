import React from "react";
import "./resume.css";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Tooltip from "@mui/material/Tooltip";
import mySkills from "../../data/SkillData";
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
          <h3>ExPerience</h3>
        </div>
        <div className="sub-content">
          <div className="epx-item1">
            <h3>Tata Consultancy Services</h3>
          </div>
          <p className="p-span">Sep-2019 - Present</p>
          <hr className="item-separator" />
          <div className="epx-role-work">
            <ul className="stepper-ul">
              <li className="epx-stepper-li">
                Building Dashboard for the testing team to access data from the
                database in UI for particular intervals.
              </li>
              <li className="epx-stepper-li">
                Increase the coach-to-user ratio by 30% by automating the task
                assigned to the user.
              </li>
              <li className="epx-stepper-li">
                Strong knowledge and experience in DevOps practices, system
                administration, and Unix/Linux operating systems.
              </li>
              <li className="epx-stepper-li">
                Increase the coach-to-user ratio by 30% by automating the task
                assigned to the user.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>Education</h3>
        </div>

        <ol className="stepper-ul">
          <li className="stepper-li">
            <div className="epx-item1">
              <h3>Jaipur National University </h3>
              <span className="p-span">2015-2019</span>
            </div>
            <p>
              <span>B.Tech IN Computer Science and Engineering.</span>
              <span>Graduate 2019 | Per : 67.9%</span>
            </p>
          </li>
          <li className="stepper-li">
            <div className="epx-item1">
              <h3>Jaipur National University </h3>
              <span className="p-span">2015-2019</span>
            </div>
            <p>
              <span>B.Tech IN Computer Science and Engineering.</span>
              <span>Graduate 2019 | Per : 67.9%</span>
            </p>
          </li>

          <li className="stepper-li">
            <div className="epx-item1">
              <h3>Jaipur National University </h3>
              <span className="p-span">2015-2019</span>
            </div>
            <p>
              <span>B.Tech IN Computer Science and Engineering.</span>
              <span>Graduate 2019 | Per : 67.9%</span>
            </p>
          </li>
        </ol>
      </section>
      <section>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>SKILLS</h3>
        </div>
        <div className="skillsContainer">
          {mySkills.map((skill,index)=>{
            return <>
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
              <img src={skill.img} alt="skillImage" className="skillIcon" />
            </Tooltip>
            <p>{skill.name}</p>
          </div>
            </>
          })}
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
