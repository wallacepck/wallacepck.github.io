import PHS from "../../assets/work_PHS.png"
import unifyTime from "../../assets/work_UniFyTime.png"
import ParadeStateProj from "../../assets/ParadeStateProj.jpg";
import dsta from "../../assets/dsta.png";
import LegoProject from "../../assets/LegoProject.png";
import FYP_robot1 from "../../assets/FYP_robot1.jpg";
import Rnd_project1 from "../../assets/Rnd_project1.jpg";
import NRC_Robot from "../../assets/NRC_Robot.jpg";


export const projectsData = [
    {
      id: 1,
      image: PHS,
      title: "PHS Health Screening 2024",
      category: "Non-School",
      backgroundDate: "May 2024 - Present",
      backgroundTech: "JavaScript, ReactJS, MongoDB",
      backgroundTitle: "Self-Sourced Project - Lead Software Developer",
      background: "This is an annual health screening by Public Health Service (PHS). I led a team of 4 developers to update and streamline the developement of the current website to its lastest requirement. This website has impacted more than 250 users.",
      link: "https://www.publichealthservice.org/health-screening",
    },
    {
      id: 2,
      image: unifyTime,
      title: "UniFyTime (Orbital)",
      category: "School",
      backgroundDate: "May 2024 - Present",
      backgroundTech: "JavaScript, ReactJS, Firebase, Telegraf.js",
      backgroundTitle: "Summer Module Project",
      background: "Created a web-based calendar system which encompassed a Telegram Bot Integration",
      link: "https://unify-time.vercel.app/",
    },  
    {
      id: 3,
      image: ParadeStateProj,
      title: "Parade State Project",
      category: "Non-School",
      backgroundDate: "Jan 2022 - Present",
      backgroundTech: "Microsoft VBA, Google App Script",
      backgroundTitle: "Self-Initialised Project during National Service",
      background: "The system in MINDEF can be very inefficent, hence I created one Microsoft Excel macro project using Microsoft VBA.\nI also created two Telegram Bots using Google App Script | @BMTC_Athena_Bot & @Athena_MC_Bot",
      link: "https://drive.google.com/file/d/18pl2Rn5UUkmvBA5IxlcUsSUNbdRFXsTK/view?usp=sharing",
    },
    {
      id: 4,
      image: dsta,
      title: "AI Chatbot & MLOps",
      category: "Non-School",
      backgroundDate: "Mar 2021 – Jun 2021",
      backgroundTech: "Python, Rasa Open Source, Docker, Harbor",
      backgroundTitle: "Internship Project",
      background: "Worked on an AI chatbot including Rasa Open Source, and worked on a project on Harbor, Docker and MLOps",
      link: "https://rasa.com/docs/rasa/",
    },
    {
      id: 5,
      image: LegoProject,
      title: "Lego Brick Detection",
      category: "School",
      backgroundDate: "Dec 2020 – Jan 2021",
      backgroundTech: "Python, OpenCV",
      backgroundTitle: "Module Project",
      background: "It detects and counts different types of Lego bricks using OpenCV",
      link: "https://drive.google.com/file/d/1wbu8WojZS0Mn_pDxRTtFRHj2SroiPaLu/view?usp=sharing",
    },
    {
      id: 6,
      image: FYP_robot1,
      title: "Autonomous Security Surveillance",
      category: "School",
      backgroundDate: "Mar 2020 – Aug 2020",
      backgroundTech: "JavaScript, NodeJS, WebRTC, Tinkercad, ROS, Arduino",
      backgroundTitle: "Polytechnic Final Year Project",
      background: "This project was preceded by multiple batches of seniors. Changed the framework of the code to support WebRTC using NodeJS to improve connection latency significantly, and improved communication & movement capabilities using Arduino, Tinkercad, ROS & servo motors",
      link: "https://drive.google.com/file/d/17zSOAsQ2pmVJUwayGophEfGVmdz96ogB/view?usp=sharing",
    },
    {
      id: 7,
      image: Rnd_project1,
      title: "Mental Health Optimisation",
      category: "School",
      backgroundDate: "Oct 2019 - Feb 2020",
      backgroundTech: "C#, AdobeXD, Unity Game Engine",
      backgroundTitle: "Research & Development Project",
      background: "Worked with Dr Harry Nguyen, AI Professor at SIT, and Dr Øystein Eiring, Psychologist from Norway. Used the analysis of medical disorders and study of gamification to ideate a medical app which greatly increases the habit of adherence. Used Adobe XD & Unity Game Engine to design and create the app",
      link: "https://drive.google.com/file/d/1JX8zxDpHRwfjiBLNBnhXCaZ0xRf7EYaS/view?usp=sharing",
    },
    {
      id: 8,
      image: NRC_Robot,
      title: "National Robotic Competition",
      category: "Non-School",
      backgroundDate: "Participated in 2018 and 2019.",
      backgroundTech: "RobotC",
      backgroundTitle: "Self-Sourced Competition",
      background: "Every year participants are given a challenge project to achieve using robotics",
      link: "https://drive.google.com/drive/folders/1epiUtKWWU-Zr_Q7pvQ0DS0X2FiAdnHeQ?usp=sharing",
    },
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'school',
  },
  {
    name: 'non-school',
  },
];