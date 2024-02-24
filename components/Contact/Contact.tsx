"use client";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../Button/SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({ section: "Contact", threshold: 0.3 });
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 w-full"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="underline mb-2 text-center">
        Please contact me by sending an{" "}
        <a
          href="mailto:uttamakwana4503@gmail.com"
          className="font-semibold italic"
        >
          e-mail
        </a>
      </p>
      <form
        className="flex flex-col gap-2"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email send successfully!");
        }}
      >
        <input
          type="email"
          name="email"
          id="email"
          required
          maxLength={500}
          placeholder="Enter your email address"
          className="w-100 rounded-md bg-white border outline-none border-black/[0.1] focus:border-black/[0.3]  py-4 px-6"
        />
        <textarea
          className="w-100 rounded-md bg-white border outline-none border-black/[0.1] focus:border-black/[0.3] py-4 px-6"
          placeholder="Your Message"
          cols={30}
          name="message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
