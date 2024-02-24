import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uttam Makwana | Portfolio",
  description:
    "Uttam Makwana is a full stack web developer. I know HTML, CSS, JavaScript, all the concepts of MERN Stack developer. Highly interested in growing my skills and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-26 sm: pt-36`}
      >
        <div className="absolute top-[1rem] left-[50%] translate-x-[-50%] w-[100%] flex align-middle justify-center -z-10">
          <div className="bg-purple-200 rounded-full blur-[10rem] w-[50%] h-[300px] max-w-[800px]"></div>
          <div className="bg-red-200  rounded-full blur-[10rem] w-[50%] h-[300px] max-w-[800px]"></div>
        </div>
        <ActiveSectionContextProvider>
          <Toaster position="top-right" />
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
