"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectType = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  website,
  code,
}: ProjectType) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 lg:mb-8 last:mb-0 cursor-default"
    >
      <section className="project-card | bg-gray-100 dark:bg-gray-900 border border-black/5 dark:border-white/5 overflow-hidden lg:pr-8 lg:h-[20rem] relative hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
        <div className="p-4 lg:pl-10 lg:pr-2 lg:pt-10 lg:max-w-[50%] flex flex-col h-full group-even:ml-auto">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 lg:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-gray-800 px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full font-medium"
              >
                {tag}
              </li>
            ))}
            <a
              className="bg-blue-600 flex gap-1 items-center px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full font-medium cursor-pointer"
              href={website}
              target="_blank"
            >
              <span>Visite Site</span>{" "}
              <FaExternalLinkAlt className="translate-y-[-1px]" />
            </a>
            <a
              className="bg-white-900 flex gap-1 items-center px-3 py-1 text-[0.75rem] uppercase tracking-wider text-black dark:text-white border border-black/[0.7] dark:border-white/10 rounded-full font-medium cursor-pointer"
              href={code}
              target="_blank"
            >
              <span>Code</span> <BsGithub className="translate-y-[-1px]" />
            </a>
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={"Project I worked on"}
          quality="95"
          priority
          className="hidden lg:block group-even:right[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:-left-40 absolute top-8 -right-40 w-[35rem] rounded-t-lg shadow-2xl group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
      </section>
    </motion.div>
  );
}
