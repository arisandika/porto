"use client";

import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const navLinks = [
  { href: "/", label: "Home", number: 1 },
  { href: "/about", label: "About", number: 2 },
  { href: "/contact", label: "Contact", number: 3 },
  { href: "/resume", label: "Resume", number: 4 },
];

const socialLinks = [
  {
    href: "mailto:arisndk36@gmail.com",
    label: "Mail",
    external: true,
  },
  { 
    href: "https://linkedin.com", 
    label: "Linkedin", 
    external: true 
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    external: true,
  },
  { 
    href: "https://github.com", 
    label: "Github", 
    external: true 
  },
];

const FeaturedProjects = [
  { href: "/projects/intera-erp", label: "INTERA-ERP", number: 5 }, 
  { href: "/projects/ecommerce", label: "E-Commerce", number: 6 },   
];

interface NavItemProps {
  href: string;
  label: string;
  external?: boolean;
  number?: number;
  onClick?: () => void;
}

const NavItem = ({ href, label, external, number, onClick }: NavItemProps) => {
  const isInternal = !external;
  
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="inline-flex items-center gap-1 text-xs transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group"
    >
      <span>{label}</span>
      {isInternal ? (
        <span className="flex-shrink-0 flex items-center justify-center text-[10px] font-mono text-yellow-300/70 group-hover:text-yellow-300 transition-colors -mt-1">
          {number?.toString().padStart(2, '0')}
        </span>
      ) : (
        <svg
          className="w-3 h-3 text-yellow-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      )}
    </Link>
  );
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-200 h-full md:bg-black/5 shrink-0 transition-all duration-300 ease-in-out overflow-hidden bg-[#111] md:backdrop-blur-lg ${
          isOpen
            ? "translate-x-0 w-64 border-r border-[#f2f2f21a]"
            : "-translate-x-full w-64 border-r border-[#f2f2f21a] md:translate-x-0 md:w-0 md:border-none"
        }`}
      >
        <div className="flex flex-col w-64 h-full px-4 overflow-y-auto">
          <div className="flex flex-col gap-4 pb-6 border-b pt-7 border-[#f2f2f21a]">
            <div className="flex gap-2">
              <Image
                src="/assets/images/logo-transparent.png"
                alt="logo"
                width={100}
                height={100}
                priority
                quality={90}
                sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
                className="w-12 h-12"
              />
            </div>
            
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavItem 
                  key={link.label} 
                  {...link} 
                  onClick={handleLinkClick} 
                />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 py-6 border-b border-[#f2f2f21a]">
            <nav className="flex flex-col gap-3">
              <span className="text-xs font-light tracking-wider text-white uppercase opacity-40">
                Featured Projects
              </span>
              {FeaturedProjects.map((link) => (
                <NavItem 
                  key={link.label} 
                  {...link} 
                  onClick={handleLinkClick} 
                />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 py-6 border-b border-[#f2f2f21a]">
            <nav className="flex flex-col gap-3">
              <span className="text-xs font-light tracking-wider text-white uppercase opacity-40">
                Socials
              </span>
              {socialLinks.map((link) => (
                <NavItem 
                  key={link.label} 
                  {...link} 
                  onClick={handleLinkClick} 
                />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 py-6">
            <nav className="flex flex-col gap-3">
              <span className="text-xs font-light tracking-wider text-white uppercase opacity-40">
                Let&apos;s build something together.
              </span>
              <Link
                href="mailto:arisndk36@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-2 text-xs transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group"
              >
                <svg
                  className="w-3 h-3 text-yellow-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
                <span>arisndk36@gmail.com</span>
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;