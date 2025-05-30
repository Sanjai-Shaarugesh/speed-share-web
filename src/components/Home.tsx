import { motion } from "motion/react";
import '../styles/global.css';
import FeaturesSectionDemo from "./FeaturesSectionDemo";
import NavbarDemo from "./NavbarDemo";
import {useRef} from 'react';
import BackgroundLinesDemo from './BackgroundLinesDemo'
import { Avatar, AvatarFallback, AvatarImage } from "../../@shadcn/ui/components/ui/avatar";

export default function HomeComponent() {
  return (
    <div className="relative mx-auto my-10 md:my-20 flex max-w-7xl flex-col items-center justify-center">
      <Navbar /> 
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-6 md:py-10 lg:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-xl sm:text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"share you're files any where at any time"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          share your files to anyone to anywhere with ease with lightning speed ⚡  without any fear of data loss or privacy breaches, ensuring your data remains secure and private. Your files are encrypted and  doesn't stored anywhere , providing you with peace of mind and confidence in your data's safety.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-full sm:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-10 md:mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 sm:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="./speed-shares.vercel.app_.png"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-3 md:py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 md:h-10 md:w-10">
          <AvatarImage src="./icon.webp" alt="@shadcn" />
        </Avatar>
        <h1 className="text-sm sm:text-base font-bold md:text-2xl">Speed-share</h1>
      </div>
      <button className="w-20 md:w-24 lg:w-32 transform rounded-lg bg-black px-3 sm:px-6 py-1 sm:py-2 text-sm md:text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};