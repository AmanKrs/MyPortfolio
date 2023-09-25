import akpicso from "../assets/akpicso.jpg";
import travel from "../assets/travel.svg";
import krishan from "../assets/krishan.png";
import anime from "../assets/anime.png";
import game from "../assets/game.svg";

export const myIntro = {
  summary:
    "Enthusiastic Computer Science Engineer with 3.5 years of experience in TCS, eager to contribute to team success with Skilled in HTML, React.JS, JavaScript, DevOps, CI/CD Tools, Docker, AWS services, and  a fast learner with creative problem-solving skills, and good  communication skills looking for a responsible position to gain  practical experience.",
  other: "xyz",
};

export const myRoles = {
  item1:
    "Developing a web-based app components using React.Js using concepts like such as React-Hooks, react-router-dom React-form, contextAPI, Redux-Toolkit.",

  item2:
    "Design and implementation of Jenkins jobs that execute Pipeline-based automation and Shell scripts. Creating  Shell scripts that can automate processes and get rid of manual labour.",

  item3:
    "Configuring Application Server using JBoss, Automating performance testing for REST-APIs using Jmeter, Scheduling and monitoring batch-jobs in sos-jobschedular, Installing  and setting up the Software, troubleshooting and debugging technical systems",

  item4:
    "I am constantly eager to learn new technology. To accomplish my aim, I'm now learning backend development using NodeJS and Express for my next professional objective Full-Stack developer.",
};

export const myHobbies = [
  {
    name: "Photography",
    details:
      "I enjoy discovering new things and locations and preserving those experiences in photographs. I also manage an Instagram account titled @akpicso.",
    img: akpicso,
  },
  {
    name: "Travel",
    details:
      "Travelling is one of my greatest pastimes, and it's even more enjoyable when done with friends or family. I adore mountainous region scenery.",
    img: travel,
  },
  {
    name: "Motivation",
    details:
      "I love to learn about my culture and the past. I'm really motivate my-self by 'lord krishan' lesson in 'The Bhagwat Gita'.",
    img: krishan,
  },
  {
    name: "Watching Anime",
    details:
      "Anime is more than just a programme, it evokes strong emotions in those who watch it. My all-time favourite  character is Goku from Dragon Ball-Z.",
    img: anime,
  },
  {
    name: "Gaming",
    details:
      "I enjoy playing adventure and shooting games. COD, GTA, NFS, and PUB-G are some of my favourite games.",
    img: game,
  },
];

export default { myIntro, myHobbies, myRoles };
