import { ModeToggle } from "./ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "./ui/footer";
import LaunchUI from "./logos/launch-ui";
import { siteConfig } from "../../config/site";
import type { ReactNode } from "react";
import { cn } from ".././lib/utils";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "Speed-share",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Changelog", href: siteConfig.url },
        { text: "Documentation", href: siteConfig.url },
      ],
    },
    {
      title: "Speed-share",
      links: [
        { text: "About", href: siteConfig.links.doc },
       
        { text: "Blog", href: siteConfig.links.doc },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "LinkedIn", href: siteConfig.links.linkedin },
        { text: "X", href: siteConfig.links.x },
        { text: "Github", href: siteConfig.links.github },
      ],
    },
  ],
  copyright = "© 2025 Sanjai-shaarugesh. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: siteConfig.links.licence },
    { text: "Terms of Service", href: siteConfig.links.licence },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <div className="bg-gradient-to-b from-transparent via-black to-black">
    <footer
      className={cn(
        "relative z-10 w-full max-w-5xl mx-auto px-6 py-12 rounded-t-3xl backdrop-blur-md bg-[#0a0f1c] border border-blue-500/40 ring-2 ring-blue-400/70 hover:ring-blue-500/90 transition-all duration-300",
        "shadow-[0_0_20px_rgba(0,191,255,0.7),_0_0_60px_rgba(0,191,255,0.5)]",
        "hover:shadow-[0_0_30px_rgba(0,191,255,0.9),_0_0_80px_rgba(0,191,255,0.8)]",
        className
      )}
    >
      <div className="w-full max-w-[90rem] mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full border border-blue-500 shadow-[0_0_16px_rgba(0,191,255,0.8)] shrink-0">
                  {logo}
                </div>
                <div className="mr-10">
                <h2 className="text-lg font-bold mr-10 ">{name}</h2>
                </div>
                {/* Add margin-right to create space */}
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  </div>
  
  );
}
