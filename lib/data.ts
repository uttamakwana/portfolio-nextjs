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
  title: "BE Graduate in IT",
  location: "Government Engineering College, Gandhinagar",
  description:
   "I graduated in Bachelor of Engineering in IT Course and wanted to pursue Web Developement.",
  icon: React.createElement(LuGraduationCap),
  date: "2020 - 2024",
 },
 {
  title: "Core Developer Team Lead",
  location: "IBM SkillsBuild & CSR Box",
  description:
   "Our team worked upon created a platform called EduWise (an educational platoform) and get selected for the first runner up in India for the frontend skills.",
  icon: React.createElement(CgWorkAlt),
  date: "July 2023 - Aug 2023",
 },
] as const;

export const projectsData = [
 {
  title: "E-Commerce",
  description:
   "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  imageUrl: eCommerceImg,
  website: "https://um-ecommerce.netlify.app/",
  code: "https://github.com/uttamakwana/shopping-cart"
 },
 {
  title: "SplitWise",
  description:
   "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  imageUrl: splitWiseImg,
  website: "https://splitwise-expense.netlify.app/",
  code: "https://github.com/uttamakwana/splitwise-frontend"
 },
 {
  title: "JavaScript30",
  description:
   "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  imageUrl: javascript30Img,
  website: "https://js30.netlify.app/",
  code: "https://github.com/uttamakwana/JavaScript30"
 },
 {
  title: "EduWise",
  description:
   "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  imageUrl: eduwiseImg,
  website: "https://eduwisev2.netlify.app/",
  code: "https://github.com/uttamakwana/eduwisev2",
 },
 {
  title: "Pomodoro",
  description:
   "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
 "Git",
 "GitHub",
 "Tailwind",
 "MongoDB",
 "Redux",
 "Express",
 "Framer Motion",
] as const;
