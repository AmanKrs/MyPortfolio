import JS from "../assets/icon/javascript.svg";
import Nodejs from "../assets/icon/nodejs.svg";
import css from "../assets/icon/css.svg";
import html from "../assets/icon/html.svg";
import Mui from "../assets/icon/mui.svg";
import mongodb from "../assets/icon/mongodb.svg";
import react from "../assets/icon/react.svg";
import bash from "../assets/icon/bashscripting.svg";
import jenkins from "../assets/icon/jenkins.svg";
import linux from "../assets/icon/linux.svg";
import sos from "../assets/icon/sos.jpeg";
import techsupp from "../assets/icon/techspprt.png";
export const myExperience = [
  {
    company: "Tata Consultancy Services",
    details: [
      "Creating Web-App for API Performance activity.",
      "Builded Dashboard  Login/Register page with json token and form validation",
      "Working of Performance testing of API and Application using JMeter",
      "Working Experience with Jenkins, shell-Scripting, Git, Apache, sos job-scheduler, and JBoss Application servers.",
      "Migrating On-Prem server and Application to OCI cloud server",
    ],
  },
];

export const myEducation = [
  {
    institute: "Jaipur National University",
    period: "2015-2019",
    degree: "B.Tech",
    sub: "Computer Science And Engineering",
    passout: "Graduate 2019",
    percentage: "67.9%",
  },
  {
    institute: "St. Anne's High School",
    period: "2012-2014",
    degree: "Senior Secondary",
    sub: "PCM",
    passout: "YOP: 2014",
    percentage: "71.4%",
  },
  {
    institute: "St. Anne's High School",
    period: "2011-2012",
    degree: "Matriculation",
    sub: "Maths",
    passout: "YOP: 2012",
    percentage: "89%",
  },
];

export const mySkills = [
  {
    name: "HTML",
    img: html,
    score: 90,
  },
  {
    name: "CSS",
    img: css,
    score: 70,
  },
  {
    name: "JavaScript",
    img: JS,
    score: 80,
  },
  {
    name: "React",
    img: react,
    score: 75,
  },
  {
    name: "Material-UI",
    img: Mui,
    score: 60,
  },
  {
    name: "Node.Js",
    img: Nodejs,
    score: 60,
  },
  {
    name: "MongoDB Atlas",
    img: mongodb,
    score: 60,
  },
  {
    name: "Linux(RedHat)",
    img: linux,
    score: 70,
  },
  {
    name: "Jenkins",
    img: jenkins,
    score: 80,
  },
  {
    name: "Shell Scripting",
    img: bash,
    score: 70,
  },
  {
    name: "Sos Jobschedular",
    img: sos,
    score: 85,
  },
  {
    name: "DevOps",
    img: techsupp,
    score: 80,
  },
];

export default { mySkills, myExperience, myEducation };
