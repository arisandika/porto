"use client";

import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const navLinks = [
  { href: "/", label: "Home", sup: "0" },
  { href: "/about", label: "About", sup: "1" },
  { href: "/contact", label: "Contact", sup: "2" },
  { href: "/resume", label: "Resume", sup: "3" },
];

const socialLinks = [
  {
    href: "mailto:arisndk36@gmail.com",
    label: "Mail",
    sup: "↗",
    external: true,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    sup: "↗",
    external: true,
  },
  { href: "https://linkedin.com", label: "Linkedin", sup: "↗", external: true },
  { href: "https://github.com", label: "Github", sup: "↗", external: true },
];

const FeaturedProjects = [
  { href: "#", label: "INTERA-ERP", sup: "↗", external: true },
  { href: "#", label: "E-Commerce", sup: "↗", external: true },
];

const NavItem = ({
  href,
  label,
  sup,
  external,
  onClick,
}: {
  href: string;
  label: string;
  sup: string;
  external?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    onClick={onClick}
    className="w-fit px-1 pt-0.5 border-dotted cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-300 dotted-underline transition-colors"
  >
    {label}
    <sup className="ml-0.5 text-[10px] font-light leading-none text-yellow-300 font-sans">
      {sup}
    </sup>
  </Link>
);

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
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-60 h-full bg-[#111111] shrink-0 transition-all duration-300 ease-in-out md:relative overflow-hidden ${
          isOpen
            ? "translate-x-0 w-64 border-r border-white/10"
            : "-translate-x-full w-64 border-r border-white/10 md:translate-x-0 md:w-0 md:border-none"
        }`}
      >
        <div className="flex flex-col w-64 h-full px-3">
          <div className="flex flex-col gap-4 pt-4 pb-6 border-b border-white/10">
            <div className="flex gap-2">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                priority
                quality={90}
                sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
                className={`w-12 h-12}`}
              />
              {/* <h3 className="flex items-end gap-1 px-1 pb-4 transition-colors cursor-default group w-fit hover:text-yellow-300">
                Hello There{" "}
                <div className="transition rotate-0 group-hover:rotate-[-45deg]">
                  🤙🏻
                </div>
              </h3> */}
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 py-6 border-b border-white/10">
            <nav className="flex flex-col gap-3">
              <span className="px-1 text-xs font-light tracking-widest text-white uppercase opacity-40">
                Featured Projects
              </span>
              {FeaturedProjects.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 py-6 border-b border-white/10">
            <nav className="flex flex-col gap-3">
              <span className="px-1 text-xs font-light tracking-widest text-white uppercase opacity-40">
                Socials
              </span>
              {socialLinks.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 py-6">
            <nav className="flex flex-col gap-3">
              <span className="px-1 text-xs font-light tracking-widest text-white uppercase opacity-40">
                Let&apos;s build something together.
              </span>
              <Link
                href="mailto:arisndk36@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-1 pt-0.5 border-dotted cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-300 dotted-underline transition-colors"
              >
                arisndk36@gmail.com
                <sup className="ml-0.5 text-[10px] font-light leading-none text-yellow-300 font-sans">
                  ↗
                </sup>
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
