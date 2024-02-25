"use client";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ section: "Skills", threshold: 1 });
  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-[12rem] lg:scroll-mt-28 mb-28 lg:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 lg:gap-4 justify-center">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={index}
            custom={index}
            className="bg-white flex-grow sm:flex-grow-0 dark:bg-gray-950 border border-black/[0.1] dark:border-white/[0.1] rounded-xl border-opacity-80 px-5 py-3 cursor-pointer flex items-center justify-center"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
