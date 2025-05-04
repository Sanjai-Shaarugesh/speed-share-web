import React from "react";
import { useEffect, useRef, useState } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Speed ⚡",
      description:
        "Share your files with your friends anywhere at any time with lightning speed ⚡",
      component: <SpeedFeature />,
    },
    {
      title: "Security 🔒",
      description:
        "Share your files with your friends with end-to-end encryption",
      component: <SecurityFeature />,
    },
    {
      title: "How to use",
      description:
        "To know how to use watch this video 🎬",
      component: <HowToUseFeature />,
    },
    {
      title: "Share your files within seconds without any network dependencies 🛜",
      description:
        "Share your files with anyone anywhere without depending on the same network to connect and share 🔗",
      component: <GlobeFeature />,
    },
  ];

  return (
    <div className="relative z-20 py-6 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="px-4 sm:px-8 mb-12">
        <section id="features">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white mb-4">
            Packed with thousands of features
          </h4>
        </section>

        <p className="text-sm lg:text-base max-w-2xl mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Show and scan QR to connect to the sender or receiver to share files or use the code 🔗 share multiple files at the same time 🗃️
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <div className="mt-4 w-full">{feature.component}</div>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

const FeatureCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white mb-2">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm text-neutral-500 dark:text-neutral-300">
      {children}
    </p>
  );
};

const SpeedFeature = () => {
  return (
    <div className="w-full h-48 md:h-64 overflow-hidden rounded-md">
      <img
        src="/api/placeholder/500/300"
        alt="Speed feature illustration"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const SecurityFeature = () => {
  // Sample images for security feature
  const images = [
    "/api/placeholder/100/100",
    "/api/placeholder/100/100",
    "/api/placeholder/100/100",
    "/api/placeholder/100/100",
  ];

  return (
    <div className="p-4 flex flex-wrap gap-4 justify-center">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="rounded-xl p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 border-neutral-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300"
        >
          <img
            src={image}
            alt="Security illustration"
            className="rounded-lg h-20 w-20 md:h-24 md:w-24 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const HowToUseFeature = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full h-48 md:h-64 rounded-md overflow-hidden group"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
      <IconBrandYoutubeFilled className="h-12 w-12 absolute z-20 inset-0 m-auto text-red-500" />
      <img
        src="/api/placeholder/500/300"
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
    </a>
  );
};

const GlobeFeature = () => {
  return (
    <div className="h-48 md:h-64 flex items-center justify-center">
      <Globe />
    </div>
  );
};

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 240, height: 240 });

  useEffect(() => {
    const handleResize = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const width = Math.min(container.clientWidth, 300);
        setDimensions({ width, height: width });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | undefined;
    
    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: dimensions.width * 2,
        height: dimensions.height * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 12000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: "100%",
        aspectRatio: "1/1"
      }}
    />
  );
};