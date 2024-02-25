import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import splitWiseImg from "@/public/splitwise.png";
import pomodoroImg from "@/public/pomodoro.png";
import javascript30Img from "@/public/javascript30.png";
import eCommerceImg from "@/public/e-commerce.png"
import eduwiseImg from "@/public/eduwise.png"
import uttamImg from "@/public/uttam.jpg";
export { uttamImg }

export const links = [
 {
  name: "Home",
  hash: "#home",
 },
 {
  name: "About",
  hash: "#about",
 },
 {
  name: "Projects",
  hash: "#projects",
 },
 {
  name: "Skills",
  hash: "#skills",
 },
 {
  name: "Experience",
  hash: "#experience",
 },
 {
  name: "Contact",
  hash: "#contact",
 },
] as const;

export const experiencesData = [
 {
  title: "Bachelor of Engineering in Information Technology",
  location: "Government Engineering College, Gandhinagar",
  description:
   "Graduated with a Bachelor of Engineering degree in Information Technology Course. Special interest in pursuing Web Development(MERN Stack).",
  icon: React.createElement(LuGraduationCap),
  date: "2020 - 2024",
 },
 {
  title: "Lead Core Developer",
  location: "IBM SkillsBuild & CSR Box",
  description:
   "Led a team in the development of EduWise, an educational platform. Recognized as first runner-up in India for frontend skills by IBM.",
  icon: React.createElement(CgWorkAlt),
  date: "July 2023 - August 2023",
 },
] as const;


export const projectsData = [
 {
  title: "E-Commerce Platform",
  description:
   "Served as a full-stack developer for a cloning amazon website. Developed a platform serving e-commerce functionality such as product, categories, seraching, filtering and cart",
  tags: ["React", "Redux", "APIs", "Dummy JSON", "HTML", "CSS", "React Router"],
  imageUrl: eCommerceImg,
  website: "https://um-ecommerce.netlify.app/",
  code: "https://github.com/uttamakwana/shopping-cart"
 },
 {
  title: "SplitWise Expense Tracker",
  description:
   "Initiated SplitWise Expense Tracker app that tracks daily expense history and helps to split bills among friends to get rid of daily struggle of remembering debt.",
  tags: ["React", "Redux", "MongoDB", "Express", "Node", "Context API", "React Router"],
  imageUrl: splitWiseImg,
  website: "https://splitwise-expense.netlify.app/",
  code: "https://github.com/uttamakwana/splitwise-frontend"
 },
 {
  title: "JavaScript30 Analytics Tool",
  description:
   "A frontend application for showcasing the 30 basic to advanced level projects to master JavaScript.",
  tags: ["React", "HTML", "CSS", "JavaScript"],
  imageUrl: javascript30Img,
  website: "https://js30.netlify.app/",
  code: "https://github.com/uttamakwana/JavaScript30"
 },
 {
  title: "EduWise Educational Platform",
  description:
   "Led the development of frontend of EduWise an Education Portal for delivering high quality handwritten notes, IMP question, previous year question paper, etc. Ranked as first runner up in India by IBM",
  tags: ["React", "HTML", "CSS", "JavaScript"],
  imageUrl: eduwiseImg,
  website: "https://eduwisev2.netlify.app/",
  code: "https://github.com/uttamakwana/eduwisev2",
 },
 {
  title: "Pomodoro Focus Timer",
  description:
   "Developed & Engineered Pomodoro Clone application by following good UI/UX principles and settings functionality to adjust the timer and theme.",
  tags: ["React", "HTML", "CSS", "JavaScript", "Context API"],
  imageUrl: pomodoroImg,
  website: "https://um-pomofocus.netlify.app/",
  code: "https://github.com/uttamakwana/featured-pomodoro"
 }
] as const;


export const skillsData = [
 "HTML",
 "CSS",
 "JavaScript",
 "TypeScript",
 "React",
 "Angular.js",
 "Node.js",
 "Express.js",
 "SASS",
 "Figma",
 "Canva",
 "UI/UX",
 "Postman",
 "Git",
 "GitHub",
 "Tailwind",
 "MongoDB",
 "Framer Motion",
 "Redux",
 "Express",
 "Resend",
 "React Emails",
 "Fast Typing",
] as const;
