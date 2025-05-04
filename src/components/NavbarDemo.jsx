import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState, useRef, useEffect } from "react";
import '../styles/global.css';
import Home from './Home';
import BackgroundLinesDemo from './BackgroundLinesDemo';
import  FeaturesSectionDemo from './FeaturesSectionDemo';
import FooterSection from './FooterSection';

export default function NavbarDemo() {
  // References for the sections we want to scroll to
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to scroll to a section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };
  
  const navItems = [
    { 
      name: "Home", 
      link: "#home", 
      isScroll: false, 
      onClick: () => scrollToSection(homeRef) 
    },
    { 
      name: "Features", 
      link: "#features", 
      isScroll: true, 
      onClick: () => scrollToSection(featuresRef) 
    },
    { 
      name: "Contact", 
      link: "#footer", 
      isScroll: true, 
      onClick: () => scrollToSection(footerRef) 
    },

    { 
      name: "About", 
      link: "#about", 
      isScroll: true, 
      onClick: () => scrollToSection(aboutRef) 
    },
  ];

  // Custom NavItems component that supports onClick
  const CustomNavItems = ({ items }) => {
    return (
      <div className="hidden items-center gap-8 lg:flex">
        {items.map((item, idx) => (
          <a
            key={`nav-link-${idx}`}
            href={item.link}
            onClick={(e) => {
              if (item.isScroll) {
                e.preventDefault();
                item.onClick();
              }
            }}
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <Navbar className='mb-20 -mt-2'>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          {/* Use custom NavItems with onClick support */}
          <CustomNavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <a href="https://speed-shares.vercel.app/" target="_balnk">
            <NavbarButton variant="primary">Visite Speed-share</NavbarButton></a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <NavItems items={navItems} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  if (item.isScroll) {
                    e.preventDefault();
                    item.onClick();
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
              <a href="https://speed-shares.vercel.app/" target="_balnk">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Visite Speed-share
              </NavbarButton></a>
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
       {/* Features Section */}
       <div ref={homeRef} id='home' >
        <BackgroundLinesDemo/>
      </div>
      {/* Home Section */}
      <div ref={aboutRef} id="about" >
        <Home />
      </div>
      
     <div ref={featuresRef} id="features">
     <FeaturesSectionDemo/>
     </div>
      
      <div ref={footerRef} id="footer">
      <FooterSection/>
      </div>
     
      
      
    </div>
  );
}