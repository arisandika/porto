import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/");

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-3 md:px-0 py-4 transition-opacity duration-300 border-b border-solid md:grid md:grid-cols-12 bg-[#111111] grid-gap border-white/10">
      <div className="flex items-center justify-between w-full md:hidden">
        <Link href="/" className="px-1 transition-colors hover:text-yellow-300">
          Ari Sandika
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex flex-col items-center justify-center space-y-1 cursor-pointer focus:outline-none group ${isOpen ? "hover:rotate-[-180deg]" : "hover:space-y-[3.2px]"} transition`}
        >
          <span
            className={`block w-5 h-[1.5px] bg-white group-hover:bg-yellow-300 transition duration-300 ease-in-out ${
              isOpen ? "translate-y-[5.4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white group-hover:bg-yellow-300 transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white group-hover:bg-yellow-300 transition duration-300 ease-in-out ${
              isOpen ? "-translate-y-[5.4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div className="flex-col hidden col-span-12 md:flex md:col-span-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex flex-col items-center justify-center space-y-1 cursor-pointer focus:outline-none group ${isOpen ? "hover:rotate-[-180deg]" : "hover:space-y-[3.2px]"} transition`}
          >
            <span
              className={`block w-5 h-[1.5px] bg-white group-hover:bg-yellow-300 transition duration-300 ease-in-out ${
                isOpen ? "translate-y-[5.4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white group-hover:bg-yellow-300 transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white group-hover:bg-yellow-300 transition duration-300 ease-in-out ${
                isOpen ? "-translate-y-[5.4px] -rotate-45" : ""
              }`}
            />
          </button>
          <Link href="/" className="transition-colors hover:text-yellow-300">
            Ari Sandika
          </Link>
        </div>
      </div>

      <div className="flex-col items-start hidden col-span-6 md:flex md:col-span-3">
        <p>Fullstack Web Developer</p>
      </div>

      <div className="flex-col items-start hidden col-span-6 md:flex md:items-end md:col-span-2">
        <p>Tangerang, ID</p>
      </div>

      {isProjectDetail && (
        <div className="flex-col items-start hidden col-span-6 md:flex md:items-end md:col-span-1">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
