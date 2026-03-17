"use client";

import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const socialLinks = [
  {
    href: "mailto:arisndk36@gmail.com",
    label: "Mail",
    sup: "↗",
    external: true,
  },
  { href: "https://linkedin.com", label: "Linkedin", external: true },
  {
    href: "https://instagram.com",
    label: "Instagram",
    sup: "↗",
    external: true,
  },
  { href: "https://github.com", label: "Github", external: true },
];

const FeaturedProjects = [
  { href: "#", label: "INTERA-ERP", external: true },
  { href: "#", label: "E-Commerce", external: true },
];

const NavItem = ({
  href,
  label,
  external,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    onClick={onClick}
    className="inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50"
  >
    {label}
    <svg
      className="w-3 h-3 text-yellow-300"
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
        className={`fixed md:hidden inset-y-0 left-0 z-60 h-full bg-[#111111] shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "translate-x-0 w-64 border-r border-white/10"
            : "-translate-x-full w-64 border-r border-white/10 md:translate-x-0 md:w-0 md:border-none"
        }`}
      >
        <div className="flex flex-col w-64 h-full px-4 overflow-y-auto">
          <div className="flex flex-col gap-4 pb-6 border-b pt-7 border-white/10">
            <div className="flex gap-2">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                priority
                quality={90}
                sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
                className="w-12 h-12"
              />
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 py-6 border-b border-white/10">
            <nav className="flex flex-col gap-2">
              <span className="text-xs font-light text-white uppercase opacity-40">
                Featured Projects
              </span>
              {FeaturedProjects.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 py-6 border-b border-white/10">
            <nav className="flex flex-col gap-2">
              <span className="text-xs font-light text-white uppercase opacity-40">
                Socials
              </span>
              {socialLinks.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 py-6">
            <nav className="flex flex-col gap-2">
              <span className="text-xs font-light text-white uppercase opacity-40">
                Let&apos;s build something together.
              </span>
              <Link
                href="mailto:arisndk36@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50"
              >
                arisndk36@gmail.com
                <svg
                  className="w-3 h-3 text-yellow-300"
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
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
