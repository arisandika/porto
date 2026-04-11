"use client";

import Link from "next/link";

interface CustomLinkProps {
  href: string;
  label: string;
  external?: boolean;
  number?: number;
  className?: string;
  onClick?: () => void;
}

export default function CustomLink({
  href,
  label,
  external,
  number,
  className = "",
  onClick,
}: CustomLinkProps) {
  const isInternal = !external;
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group ${className}`}
    >
      <span>{label}</span>
      {isInternal ? (
        <span className="flex-shrink-0 flex items-center justify-center text-[10px] font-mono text-yellow-300/70 group-hover:text-yellow-300 transition-colors -mt-1">
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
}
