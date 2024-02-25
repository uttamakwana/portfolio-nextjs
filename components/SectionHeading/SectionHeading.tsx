"use client";

import { motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-3xl font-medium capitalize mb-8 text-center"
    >
      {children}
    </motion.h2>
  );
}
