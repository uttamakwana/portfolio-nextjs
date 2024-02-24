"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { uttamImg } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView({ section: "Home", threshold: 1 });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="text-center mb-10 sm:mb-0 scroll-mt-[100rem] relative"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={uttamImg}
              alt="Logo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.2 }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Uttam Makwana.`}</span>{" "}
        {`I'm a `}
        <span className="font-bold">{`full-stack web developer`}</span>{" "}
        <span className="font-bold">(MERN).</span> I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-wrap sm:flex-nowrap font-medium items-center justify-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer font-medium outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-900 px-7 py-3 font-medium flex items-center gap-2 rounded-full cursor-pointer border border-black/10 outline-none focus:translate-y-1 hover:translate-y-1 active:translate-y-1 transition"
          href="/UTTAM_MAKWANA_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:text-gray-500 transition" />
        </a>
        <a
          className="bg-white text-gray-800 px-4 py-3 text-xl flex items-center gap-2 rounded-full cursor-pointer border border-black/10 outline-none focus:-translate-y-1 hover:-translate-y-1 active:-translate-y-1 transition"
          href="https://linkedin.com/in/uttamakwana"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-800 px-4 py-3 text-xl flex items-center gap-2 rounded-full cursor-pointer border border-black/10 outline-none focus:translate-y-1 hover:translate-y-1 active:translate-y-1 transition"
          href="https://github.com/uttamakwana"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
