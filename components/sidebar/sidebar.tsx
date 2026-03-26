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
  { href: "mailto:arisndk36@gmail.com", label: "Mail", external: true },
  { href: "https://linkedin.com", label: "Linkedin", external: true },
  { href: "https://instagram.com", label: "Instagram", external: true },
  { href: "https://github.com", label: "Github", external: true },
];

const featuredProjects = [
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
      className="group inline-flex w-fit items-center gap-1 border-b border-white/20 border-dotted text-xs text-white/80 transition-colors duration-300 hover:border-yellow-300/50 hover:text-yellow-300"
    >
      <span>{label}</span>
      {isInternal ? (
        <span className="-mt-1 flex flex-shrink-0 items-center justify-center font-mono text-[10px] text-yellow-300/70 transition-colors group-hover:text-yellow-300">
          {number?.toString().padStart(2, "0")}
        </span>
      ) : (
        <svg
          className="h-3 w-3 flex-shrink-0 text-yellow-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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

// Extracted Component for DRY Principle
const NavSection = ({
  title,
  links,
  onClick,
}: {
  title: string;
  links: NavItemProps[];
  onClick: () => void;
}) => (
  <div className="flex flex-col gap-2 border-b border-[#f2f2f21a] py-6">
    <nav className="flex flex-col gap-3">
      <span className="text-[11px] font-light uppercase tracking-wider text-white/60">
        {title}
      </span>
      {links.map((link) => (
        <NavItem key={link.label} {...link} onClick={onClick} />
      ))}
    </nav>
  </div>
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
          className="fixed inset-0 z-50 bg-black/20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-[200] flex h-full shrink-0 flex-col overflow-hidden bg-[#111] transition-all duration-300 ease-in-out md:bg-black/5 md:backdrop-blur-lg border-r border-[#f2f2f21a] w-64 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full md:w-0 md:translate-x-0 md:border-none"
        }`}
      >
        <div className="flex h-full w-64 flex-col overflow-y-auto px-4">
          <div className="flex flex-col gap-4 border-b border-[#f2f2f21a] pb-6 pt-7">
            <div className="flex gap-2">
              <Image
                src="/assets/images/logo-transparent.png"
                alt="logo"
                width={100}
                height={100}
                priority
                quality={90}
                sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
                className="h-12 w-12"
              />
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavItem key={link.label} {...link} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>

          <NavSection
            title="Featured Projects"
            links={featuredProjects}
            onClick={handleLinkClick}
          />
          <NavSection
            title="Socials"
            links={socialLinks}
            onClick={handleLinkClick}
          />

          <div className="flex flex-col gap-2 py-6">
            <nav className="flex flex-col gap-3">
              <span className="text-[11px] font-light uppercase tracking-wider text-white/60">
                Let&apos;s build something together.
              </span>
              <NavItem
                href="mailto:arisndk36@gmail.com"
                label="arisndk36@gmail.com"
                external
                onClick={handleLinkClick}
              />
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
