"use client";

import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useThemeSwitcher } from "@/context/ThemeContextProvider";

export default function Experience() {
  const { ref } = useSectionInView({ section: "Experience", threshold: 0.5 });
  const { theme } = useThemeSwitcher();

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                display: "block",
                background: theme === "light" ? "#f3f4f6" : "#111827",
                cursor: "default",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#111827",
                boxShadow: theme === "light" ? "0 0 0 4px white" : "0 0 0 4px #1f2937",
                fontSize: "1.25rem",
              }}
              className="my-v-element"
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-200">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
