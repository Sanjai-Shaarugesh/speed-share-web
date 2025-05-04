import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function HeroSectionOne() {
  // Add responsive state to handle text animations on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative mx-auto my-4 sm:my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      {/* Left border with gradient */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      {/* Right border with gradient */}
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      {/* Bottom border with gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-px w-20 sm:w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      
      <div className="px-4 py-6 sm:py-10 md:py-20 w-full">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-xl sm:text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {isMobile ? (
            // Simplified animation for mobile to prevent performance issues
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Launch your website in hours, not days
            </motion.span>
          ) : (
            // Word-by-word animation for larger screens
            "Launch your website in hours, not days"
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
              ))
          )}
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
            delay: isMobile ? 0.5 : 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-3 sm:py-4 text-center text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          With AI, you can launch your website in hours, not days. Try our best
          in class, state of the art, cutting edge AI tools to get your website
          up.
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
            delay: isMobile ? 0.7 : 1,
          }}
          className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button className="w-full sm:w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-full sm:w-60 mt-3 sm:mt-0 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
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
            delay: isMobile ? 0.9 : 1.2,
          }}
          className="relative z-10 mt-10 sm:mt-16 md:mt-20 rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-100 p-2 sm:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
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
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-3 sm:px-4 py-3 sm:py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-6 sm:size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-sm sm:text-base font-bold md:text-2xl">Aceternity UI</h1>
      </div>
      <button className="w-20 sm:w-24 transform rounded-lg bg-black px-3 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};