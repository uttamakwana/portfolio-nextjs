import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button className="group flex items-center justify-center gap-[2px] bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-medium self-start px-4 py-2  lg:px-6 lg:py-4 border-none outline-none rounded-full relative hover:bg-blue-400 focus:bg-blue-40 transition-all disabled:scale-90 w-[initial] lg:w-[10rem]">
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-90 group-hover:-translate-y-[4px] group-hover:translate-x-[4px]  group-focus:-translate-y-[4px] group-focus:translate-x-[4px] group-active:-translate-y-[4px]  group-active:translate-x-[4px]transition-all" />
        </>
      )}
    </button>
  );
}
