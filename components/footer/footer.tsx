"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 flex flex-col items-center dot-grid bg-[#1C1C1C] w-full text-zinc-100">
      <div className="w-full px-6 py-8 md:px-12 md:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-2 md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-yellow-300 border rounded-full border-yellow-300/30">
                v1.0.0
              </span>
              <span className="text-xs uppercase text-white/40">
                Last Updated 2026-03-20
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Link
              href="mailto:arisndk36@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted text-white/80 hover:text-yellow-300 w-fit border-white/20 hover:border-yellow-300/50"
            >
              Mail
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
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted text-white/80 hover:text-yellow-300 w-fit border-white/20 hover:border-yellow-300/50"
            >
              Linkedin
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
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted text-white/80 hover:text-yellow-300 w-fit border-white/20 hover:border-yellow-300/50"
            >
              Instagram
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
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted text-white/80 hover:text-yellow-300 w-fit border-white/20 hover:border-yellow-300/50"
            >
              Github
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
          </div>

          <div className="flex flex-col gap-2 md:col-span-4">
            <p className="text-sm text-white/80">
              Let&apos;s build something together.
            </p>
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
          </div>
        </div>

        <div className="pt-6 mt-8 border-t md:mt-10 border-white/10">
          <p className="text-xs text-white/30">
            © {currentYear} Ari Sandika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
