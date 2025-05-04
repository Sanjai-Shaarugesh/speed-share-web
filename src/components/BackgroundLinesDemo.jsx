import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full min-h-screen flex-col px-4 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h2
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans py-2 sm:py-4 md:py-6 lg:py-10 relative z-20 font-bold tracking-tight">
          Speed-share <br className="md:hidden" /> 
          <span className="inline md:inline-block md:mt-2">Share files to anyone from anywhere</span>
        </h2>
        <p
          className="max-w-lg mx-auto mt-4 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center px-2">
          Share files to anyone from anywhere with end-to-end encryption, without any fear of data breaches or unauthorized access.
        </p>
        
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://speed-shares.vercel.app/" target="_blank"><button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
            Get Started
          </button></a>
          
          <a href="https://github.com/Sanjai-Shaarugesh/Speed-share" target="_blank"><button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium transition-colors">
            Learn More
          </button></a>
          
        </div>
      </div>
    </BackgroundLines>
  );
}