import Link from "next/link";
import { usePathname } from "next/navigation";
import Tabs from "@/components/ui/tabs";
import Button from "@/components/ui/button";
import Image from "next/image";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/");

  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="hidden text-xs transition-colors md:flex hover:text-yellow-300 uppercase"
        >
          Ari Sandika
        </Link>

        <Link
          href="/"
          className="flex md:hidden"
        >
        <Image
          src="/assets/images/logo-transparent.png"
          alt="logo"
          width={100}
          height={100}
          priority
          quality={90}
          sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
          className="flex w-12 h-12 md:hidden"
        />
        </Link>
      </div>

      <div className="absolute -translate-x-1/2 left-1/2 flex items-center gap-3">
        <Link
          href="/"
          className="hidden text-xs transition-colors md:flex hover:text-yellow-300"
        >
          Works
        </Link>
        <Link
          href="/about"
          className="hidden text-xs transition-colors md:flex hover:text-yellow-300"
        >
          About
        </Link>
      </div>

      <div className="md:hidden z-[300]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="group flex items-center justify-center relative z-10 [transition:all_0.5s_ease] cursor-pointer border w-[46px] h-[46px] rounded-full transition-all duration-500 bg-white/5 border border-[#f2f2f21a] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2f2f214] hover:border-[#f2f2f233] shadow-[0_9px_20px_#0000001d] hover:shadow-[0_14px_20px_#0000003d] bg-[#111111]/80 backdrop-blur-lg cursor-pointer outline-none focus-visible:outline-0"
        >
          <svg
            fill="currentColor"
            stroke="none"
            strokeWidth={0}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 overflow-visible [transition:transform_.35s_ease] [&_path]:[transition:transform_.35s_ease] ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <path
              className={`[transition:transform_.35s_ease] ${
                isOpen
                  ? "[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]"
                  : ""
              }`}
              d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
            />

            <path
              className={`[transition:transform_.35s_ease] ${
                isOpen
                  ? "[transform:rotate(22.5deg)_translate(15.5%,-23%)]"
                  : ""
              }`}
              d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
            />

            <path
              className={`[transition:transform_.35s_ease] ${
                isOpen
                  ? "[transform:rotate(112.5deg)_translate(-15%,-149.5%)]"
                  : ""
              }`}
              d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
            />
          </svg>
        </button>
      </div>

      <div className="items-center hidden gap-3 md:flex">
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
              className="transition-colors bi bi-arrow-left text-white/60 hover:text-white"
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
