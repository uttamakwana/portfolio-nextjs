"use client";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ section: "About", threshold: 1 });
  return (
    <motion.section
      id="about"
      ref={ref}
      className="max-w-[100%] mb-10 text-center leading-8 lg:mb-40 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-lg">
        From starting of my Bachelor of Engineering degree in{" "}
        <span className="font-medium text-blue-950 dark:text-blue-300">
          Information Technology
        </span>
        , I decided to pursue my passion for programming and specifically in web
        development. I explored coding in YouTube, Udemy and Google and mastered{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and making my skill set and experience grow. I{" "}
        <span className="underline text-rose-300">love</span> the feeling of
        finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium text-blue-950 dark:text-blue-300">
          React(Next.js), MongoDB, Express.js, Node.js, HTML, CSS & JavaScript
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="text-lg">
        <span className="italic">When {`I'm`} not coding</span>, I enjoy playing
        outdoor sports such as Cricket, Badminton, Soccer, Volly Boll, etc. I am
        currently advancing in{" "}
        <span className="font-medium text-blue-950 dark:text-blue-300">
          Web Development
        </span>
        . I also enjoy <span className="font-medium">learning new things</span>{" "}
        such as how to cook, drive, talk well & be healthy, consistent,
        positive, forward thinker.
      </p>
    </motion.section>
  );
}
