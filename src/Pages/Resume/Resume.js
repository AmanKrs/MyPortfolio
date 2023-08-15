import React from "react";
import "./resume.css";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Dot } from "lucide-react";

export default function Resume() {
  return (
    <div>
      <header className="header">
        <h1>Resume</h1>
        <hr className="page-title-hr"></hr>
      </header>
      <div>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>ExPerience</h3>
        </div>
        <div class="sub-content">
          <div class="epx-item1">
            <h3>Tata Consultancy Services</h3>
            <span class="p-span">Sep-2019 - Present</span>
          </div>
          <p className="exp-role">
            Frontend Developer | ReactJS, JavaScript, GraphQL
          </p>
          <hr class="item-separator" />
          <p className="epx-role-work">
            • Building Dashboard for the testing team to access data from the
            database in UI for particular intervals.
            <br></br>• Increase the coach-to-user ratio by 30% by automating the
            task assigned to the user.
          </p>
          <p className="exp-role">
            Deployment Developer | Jenkins, Sos-Scheduler, Git, Shell-Scripting,
            JMeter
          </p>
          <hr class="item-separator" />
          <p className="epx-role-work">
            • Strong knowledge and experience in DevOps practices, system
            administration, and Unix/Linux operating systems.
            <br></br>• Increase the coach-to-user ratio by 30% by automating the
            task assigned to the user.
          </p>
        </div>
        <div class="sub-content">
          <div class="epx-item1">
            <h3>Tata Consultancy Services</h3>
            <span class="p-span">Jan 1016 - Dec 2021</span>
          </div>
          <p className="exp-role">Bachelor Of Technology</p>

          <p className="epx-role-work">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
            quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus
            etiam et pellentesque. Molestie risus enim neque eget dui.
          </p>

          <hr class="item-separator" />
        </div>
      </div>

      <div>
        <div className="experience">
          <WorkHistoryIcon />
          <h3>Education</h3>
        </div>

        <ol className="stepper-ul">
          <li className="stepper-li">
            <div class="epx-item1">
              <h3>Jaipur National University </h3>
              <span class="p-span">Jaipur, RJ</span>
            </div>
            <div>
              <p>B.Tech IN Computer Science and Engineering.</p>
              <p>Graduate 2019 | Per : 67.9%</p>
            </div>
          </li>
          <li className="stepper-li">
            <div class="epx-item1">
              <h3>Jaipur National University </h3>
              <span class="p-span">Jaipur, RJ</span>
            </div>
            <div>
              <p>B.Tech IN Computer Science and Engineering.</p>
              <p>Graduate 2019 | Per : 67.9%</p>
            </div>
          </li>
          <li className="stepper-li">
            <div class="epx-item1">
              <h3>Jaipur National University </h3>
              <span class="p-span">Jaipur, RJ</span>
            </div>
            <div>
              <p>B.Tech IN Computer Science and Engineering.</p>
              <p>Graduate 2019 | Per : 67.9%</p>
            </div>
          </li>
          <li className="stepper-li">
            <div class="epx-item1">
              <h3>Jaipur National University </h3>
              <span class="p-span">Jaipur, RJ</span>
            </div>
            <div>
              <p>B.Tech IN Computer Science and Engineering.</p>
              <p>Graduate 2019 | Per : 67.9%</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
