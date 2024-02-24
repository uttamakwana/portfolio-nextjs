import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button className="group flex items-center justify-center gap-[2px] bg-gray-950 text-white font-medium self-start px-6 py-4 border-none outline-none rounded-full relative hover:bg-blue-400 focus:bg-blue-40 transition-all disabled:scale-90 w-[10rem]">
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-90 group-hover:-translate-y-[4px] group-hover:translate-x-[4px]  group-focus:-translate-y-[4px] group-focus:translate-x-[4px] group-active:-translate-y-[4px]  group-active:translate-x-[4px]transition-all" />
        </>
      )}
    </button>
  );
}
