"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Tabs from "@/components/ui/tabs";
import Button from "@/components/ui/button";
import Image from "next/image";
import HamburgerIcon from "@/components/ui/hamburger-icon";
import { siteConfig } from "@/app/config/site";
import TransitionLink from "../common/transition-link";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/");

  // Mengambil link dari config agar tetap terpusat (Scalable Architecture)
  const linkedinLink =
    siteConfig.socialLinks.find((link) => link.label === "Linkedin")?.href ||
    "https://linkedin.com";
  const resumeLink =
    siteConfig.navLinks.find((link) => link.label === "Resume")?.href ||
    "/resume";

  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <TransitionLink
          href="/"
          className="hidden text-sm transition-colors md:flex hover:text-yellow-300"
        >
          <div className="flex flex-col gap-0.5">
            <p>{siteConfig.name}</p>
            <p className="text-[13px] text-[#f2f2f280]">{siteConfig.role}</p>
          </div>
        </TransitionLink>

        <TransitionLink href="/" className="flex md:hidden">
          <Image
            src="/assets/images/a.png"
            alt="logo"
            width={100}
            height={100}
            priority
            quality={90}
            sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
            className="flex w-12 h-12 md:hidden"
          />
        </TransitionLink>
      </div>

      <div className="absolute -translate-x-1/2 left-1/2 flex items-center gap-2">
        <Tabs
          tabs={[
            { label: "Work", href: "/" },
            { label: "Info", href: "/about" },
          ]}
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="group md:flex items-center justify-center relative z-10 [transition:all_0.5s_ease] cursor-pointer border w-[46px] h-[46px] rounded-full transition-all duration-500 bg-white/5 border border-[#f2f2f21a] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2f2f214] hover:border-[#f2f2f233] shadow-[0_9px_20px_#0000001d] hover:shadow-[0_14px_20px_#0000003d] bg-[#111111]/80 backdrop-blur-lg outline-none focus-visible:outline-0 hidden"
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </div>

      <div className="md:hidden z-[300]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="group flex items-center justify-center relative z-10 [transition:all_0.5s_ease] cursor-pointer border w-[46px] h-[46px] rounded-full transition-all duration-500 bg-white/5 border border-[#f2f2f21a] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2f2f214] hover:border-[#f2f2f233] shadow-[0_9px_20px_#0000001d] hover:shadow-[0_14px_20px_#0000003d] bg-[#111111]/80 backdrop-blur-lg outline-none focus-visible:outline-0"
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </div>

      <div className="items-center hidden gap-2 md:flex">
        <Button href={linkedinLink} showExternalIcon>
          Linkedin
        </Button>
        <Button href={resumeLink} showExternalIcon>
          Resume
        </Button>

        {isProjectDetail && (
          <TransitionLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="transition-colors bi bi-arrow-left text-white/60 hover:text-white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </TransitionLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
