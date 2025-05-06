import React, { useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import createGlobe from "cobe";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../@shadcn/ui/components/ui/button";
import { LiquidButton } from './animate-ui/buttons/liquid';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Speed ⚡",
      description:
        "Share your file with your friends anywhere at any time with lightning speed ⚡",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Security 🔒",
      description:
        "Share your files with your friends with end-to-end encryption",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "How to use",
      description:
        "To know how to use, watch this video 🎬",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Share your files in seconds without any network dependencies 🛜",
      description:
        "Share your files with anyone, anywhere, without depending on the same network to connect 🔗",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-6 lg:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-8">
        <h4
          className="text-2xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
        >
          Packed with thousands of features
        </h4>
        <div className="mx-auto flex flex-col sm:flex-row justify-center gap-4 my-6 sm:my-10 max-w-md sm:max-w-lg">
        <a 
  href="https://github.com/Sanjai-Shaarugesh/Speed-share/blob/main/APP/release/Speed-share.apk" 
  download 
  className="w-full sm:w-auto"
>
  <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
    Download for Android
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
      <path fill="#30dc80" d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"></path>
      <path fill="#30dc80" d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313z"></path>
      <path fill="#30dc80" d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"></path>
    </svg>
  </Button>
</a>

          <a href="https://speed-shares.vercel.app/" target="_blank" className="w-full sm:w-auto">
            <LiquidButton className="w-full sm:w-auto flex items-center justify-center gap-2">
              Visit Speed-share <ArrowRight />
            </LiquidButton>
          </a>
        </div>
        <p
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
        >
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-8 sm:mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-lg sm:text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-4 sm:py-8 px-2 gap-4 sm:gap-10 h-full">
      <div className="w-full p-2 sm:p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="./ss.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-40 sm:h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-40 sm:h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-4 sm:gap-10 h-full group/image w-full max-w-xl mx-auto">
      <div className="w-full bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-col space-y-2 w-full h-full relative">
          <video
            controls
            poster="./speed-shares.vercel.app_answer.html.png" // Replace with your thumbnail
            className="w-full aspect-video rounded-sm transition-all duration-200"
          >
            <source src="./ss.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    './ss.png',
    './ss1.png',
    './ss2.png',
    './ss3.png',
    './ss4.png',
    './ss5.png'
  ];
 
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
 
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};
 

export const SkeletonFour = () => {
  return (
    <div className="h-full w-full max-w-xs sm:max-w-md mx-auto">
      <div className="relative w-full">
        <div className="flex flex-row justify-between space-x-4 sm:space-x-8">
          <div className="w-1/4 sm:w-1/5">
          <motion.div
      className="w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center relative"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      }}
    >
      {/* Center dot */}
      <div className="w-4 h-4 bg-emerald-400 rounded-full z-10" />

      {/* Signal arcs */}
      {[1, 2, 3].map((level) => (
        <motion.div
          key={level}
          className={`absolute rounded-full border border-emerald-400`}
          style={{
            width: `${level * 16}px`,
            height: `${level * 16}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: level * 0.3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
          </div>
          <div className="w-3/4 sm:w-4/5">
            <h3 className="text-sm sm:text-xl text-white font-semibold">
              Secure File Sharing
            </h3>
            <p className="text-xs sm:text-base text-neutral-500 font-normal">
              Share your files securely without needing the same Wi-Fi network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
