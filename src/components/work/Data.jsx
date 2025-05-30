import PHS from "../../assets/work_PHS.png"
import trackwork from "../../assets/work_trackwork.gif"
import fall_project from "../../assets/work_fall.gif";
import duplo from "../../assets/work_brick.gif";
import fyp_robot from "../../assets/work_fyp.gif";
import pose from "../../assets/work_pose.gif";
import rsaf from "../../assets/work_rsaf.jpg"


export const projectsData = [
    {
      id: 1,
      image: trackwork,
      title: "Trackwork",
      category: "Non-School",
      backgroundDate: "Dec 2023 - Present",
      backgroundTech: "Java, Mixin",
      backgroundTitle: "Personal Project - Author",
      background: "With over 500 000 downloads as of Jan 2025, Trackwork is a mod for the game Minecraft which adds tracks and wheels to allow vehicle locomotion. I curated this mod over a period of multiple months involving continuous user feedback and AGILE development. It is currently open-source and receives ocassional content updates.",
      link: "https://www.curseforge.com/minecraft/mc-mods/trackwork",
    },  
    {
      id: 2,
      image: PHS,
      title: "PHS Health Screening 2024",
      category: "Non-School",
      backgroundDate: "Jul 2024 - Aug 2024",
      backgroundTech: "JavaScript, ReactJS",
      backgroundTitle: "Self-Sourced Project - Software Developer",
      background: "This is an annual health screening by Public Health Service (PHS). I was part of a team of 4 developers that updated the application to latest requirements, improving the application services in both quality and maintainability. This website has impacted more than 250 users.",
      link: "https://www.publichealthservice.org/health-screening",
    },
    {
      id: 3,
      image: rsaf,
      title: "RSAF MTC Innovation Project",
      category: "Non-School",
      backgroundDate: "Feb 2023 - May 2023",
      backgroundTech: "Blender, Fusion 360",
      backgroundTitle: "Innovation Project - Technical Lead",
      background: "Part of a multidisciplinary effort exploring the use of 3D printing and Commercial-Of-The-Shelf VR games for training. Designed and fabricated compliant mechanisms using FDM 3D printers, while also modifying and creating assets for the VR simulator platform.",
      link: ""
    },
    {
      id: 4,
      image: fall_project,
      title: "Fall Detector",
      category: "School",
      backgroundDate: "Dec 2020 – Jan 2021",
      backgroundTech: "Torch, Python, OpenCV",
      backgroundTitle: "Module Project",
      background: "I leveraged then State-of-the-art CLIP model to perform fall detection on videos of real scenarios, surpassing existing pattern based solutions.",
      link: "https://github.com/wallacepck/fall-detection",
    },
    {
      id: 5,
      image: duplo,
      title: "Duplo Brick Detection",
      category: "School",
      backgroundDate: "Dec 2020 – Jan 2021",
      backgroundTech: "Torch, Python, OpenCV",
      backgroundTitle: "Module Project Plus",
      background: "It detects and counts different types of Duplo bricks: At first using OpenCV, then a YOLOv5 finetuned model, the latter achieving 100% accuracy on an unseen test set where the former could not.",
      link: "https://drive.google.com/file/d/1GzKcNEZFiYHS3UasvG3TYg87hfXTAq-K/view?usp=sharing",
    },
    {
      id: 6,
      image: fyp_robot,
      title: "Robotics Social Navigation",
      category: "School",
      backgroundDate: "Apr 2020 – Apr 2021",
      backgroundTech: "ROS, Gazebo, OpenCV, Python, C++",
      backgroundTitle: "Polytechnic Final Year Project",
      background: "Programmed a small differential drive robot using ZED 2/SR305 sensors to navigate an environment. This behaviour was achieved using multiple processes in multiple languages communicating over the ROS network.",
      link: "https://drive.google.com/file/d/1ybsaT5OEtiNxkS5VkIDfsrtFz9tvFMB_/view?usp=sharing",
    },
    {
      id: 7,
      image: pose,
      title: "Videopose3D lightweight",
      category: "Non-School",
      backgroundDate: "Aug 2020 – Nov 2020",
      backgroundTech: "Torch, Python, C++",
      backgroundTitle: "Personal Project",
      background: "I integrated the 3D estimation model of VideoPose3D with a lightweight 2D estimator backbone by Daniil Osokin. Performance was improved by 50% compared to the default Mediapipe backbone, but was still insufficient for my hardware at the time. Despite that, the lessons I learnt in this project would later prove extremely valuable.",
      link: "https://github.com/wallacepck/videopose3d-lightweight",
    }
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