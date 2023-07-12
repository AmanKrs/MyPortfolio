import React from "react";
import "./resume.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Typography from "@mui/material/Typography";
import { Dot } from "lucide-react";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Resume() {
  const stepIcon = () => {
    return <Dot size={30} />;
  };
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
