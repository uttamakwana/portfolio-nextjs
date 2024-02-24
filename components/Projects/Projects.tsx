"use client";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "../Project/Project";
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView({ section: "Projects", threshold: 0.3 });
  return (
    <section id="projects" ref={ref} className="scroll-mt-28 relative">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
