"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-100 dark:bg-gray-800 my-24 h-16 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
}
