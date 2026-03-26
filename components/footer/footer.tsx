"use client";

import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
  external?: boolean;
  number?: number;
  className?: string;
}

const FooterLink = ({
  href,
  label,
  external,
  number,
  className = "",
}: FooterLinkProps) => {
  const isInternal = !external;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-xs transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group ${className}`}
    >
      <span>{label}</span>
      {isInternal ? (
        <span className="flex-shrink-0 flex items-center justify-center text-xs font-mono text-yellow-300/70 group-hover:text-yellow-300 transition-colors -mt-1">
          {number?.toString().padStart(2, "0")}
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

const Footer = () => {
  const socialLinks = [
    { href: "mailto:arisndk36@gmail.com", label: "Mail", external: true },
    { href: "https://linkedin.com", label: "Linkedin", external: true },
    { href: "https://instagram.com", label: "Instagram", external: true },
    { href: "https://github.com", label: "Github", external: true },
  ];

  return (
    <footer className="sticky bottom-0 flex flex-col items-center bg-[#181818] border-t border-[#f2f2f21a] w-full text-zinc-100">
      <div className="w-full px-3 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-2 md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-normal text-yellow-300 border rounded-full border-yellow-300/30">
                v1.0.0
              </span>
              <span className="text-xs uppercase text-white/60">
                Last Updated 2026-03-20
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            {socialLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </div>

          <div className="flex flex-col gap-3 md:col-span-4">
            <p className="text-xs text-white/80">
              Let&apos;s build something together.
            </p>
            <FooterLink
              href="mailto:arisndk36@gmail.com"
              label="arisndk36@gmail.com"
              external={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
