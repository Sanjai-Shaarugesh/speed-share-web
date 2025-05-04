// File: config/site.js

export const siteConfig = {
    name: "Speed-share",
    description: "Share your files anywhere at any time with lightning speed ⚡ without any fear of data loss or privacy breaches.",
    url: "https://Speed-shares.vercel.app",
    ogImage: "/og-image.png",
    links: {
      twitter: "https://twitter.com/speedshare",
      github: "https://github.com/yourusername/speed-share",
      linkedin: "https://linkedin.com/company/speed-share"
    },
    creator: "Your Name",
    keywords: [
      "file sharing",
      "secure transfer",
      "fast sharing",
      "encrypted files",
      "private sharing"
    ],
    mainNav: [
      {
        title: "Home",
        href: "#home",
      },
      {
        title: "Features",
        href: "#features",
      },
      {
        title: "Contact",
        href: "#contact",
      },
      {
        title: "About",
        href: "#about",
      }
    ],
    features: [
      {
        title: "Lightning Fast",
        description: "Share files instantly with our optimized transfer technology",
        icon: "BoltIcon"
      },
      {
        title: "End-to-End Encryption",
        description: "Your files are fully encrypted and secure during transfer",
        icon: "ShieldIcon"
      },
      {
        title: "No Storage",
        description: "Files aren't stored on our servers, ensuring maximum privacy",
        icon: "LockIcon"
      },
      {
        title: "Share Anywhere",
        description: "Compatible with any device and platform for seamless sharing",
        icon: "GlobeIcon"
      }
    ],
    footerLinks: {
      company: [
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Contact", href: "/contact" }
      ],
      support: [
        { title: "Help Center", href: "/help" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" }
      ],
      legal: [
        { title: "Privacy", href: "/privacy" },
        { title: "Terms", href: "/terms" },
        { title: "Cookie Policy", href: "/cookies" }
      ]
    }
  };
  
  // You can also add more configurations as needed
  export const contactConfig = {
    email: "support@speed-share.com",
    phone: "+1 (123) 456-7890",
    address: "123 Share Street, Web City, Internet 12345"
  };
  
  // For theme configuration
  export const themeConfig = {
    defaultTheme: "system", // "system", "dark" or "light"
    themes: ["light", "dark"]
  };