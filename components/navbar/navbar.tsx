"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/button";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

// Extracted complex button to keep Navbar clean
const MenuToggleButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    aria-expanded={isOpen}
    className="group flex items-center justify-center relative z-10 [transition:all_0.5s_ease] cursor-pointer border w-[46px] h-[46px] rounded-full transition-all duration-500 bg-white/5 border border-[#f2f2f21a] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2f2f214] hover:border-[#f2f2f233] shadow-[0_9px_20px_#0000001d] hover:shadow-[0_14px_20px_#0000003d] bg-[#111111]/80 backdrop-blur-lg cursor-pointer outline-none focus-visible:outline-0"
  >
    <svg
      fill="currentColor"
      stroke="none"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className={`h-7 w-7 overflow-visible transition-transform duration-350 ease-in-out [&_path]:transition-transform[&_path]:duration-350 [&_path]:ease-in-out ${
        isOpen ? "rotate-45" : ""
      }`}
    >
      <path
        className={
          isOpen ? "[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]" : ""
        }
        d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
      />
      <path
        className={
          isOpen ? "[transform:rotate(22.5deg)_translate(15.5%,-23%)]" : ""
        }
        d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
      />
      <path
        className={
          isOpen ? "[transform:rotate(112.5deg)_translate(-15%,-149.5%)]" : ""
        }
        d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
      />
    </svg>
  </button>
);

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/");

  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="hidden text-xs uppercase transition-colors hover:text-yellow-300 md:flex"
        >
          Ari Sandika
        </Link>
        <Link href="/" className="flex md:hidden">
          <Image
            src="/assets/images/logo-transparent.png"
            alt="logo"
            width={100}
            height={100}
            priority
            quality={90}
            sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
            className="flex h-12 w-12 md:hidden"
          />
        </Link>
      </div>

      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
        <Link
          href="/"
          className="hidden text-xs transition-colors hover:text-yellow-300 md:flex"
        >
          Works
        </Link>
        <Link
          href="/about"
          className="hidden text-xs transition-colors hover:text-yellow-300 md:flex"
        >
          About
        </Link>
      </div>

      <div className="z-[300] md:hidden">
        <MenuToggleButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <Button href="https://linkedin.com" showExternalIcon>
          Linkedin
        </Button>
        <Button href="/resume" showExternalIcon>
          Resume
        </Button>

        {isProjectDetail && (
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="text-white/60 transition-colors hover:text-white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
