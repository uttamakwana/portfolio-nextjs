"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="p-10 lg:p-4 text-center bg-gray-100 bg-opacity-80 dark:bg-gray-900 text-gray-500 dark:text-gray-200"
    >
      <small className="mb-2 block text-xs">
        &copy; 2023-2024 Uttam Makwana. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </motion.footer>
  );
}
