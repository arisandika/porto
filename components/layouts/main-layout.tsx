"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollThreshold = documentHeight - windowHeight - 200;

      setShowFooter(scrollTop >= scrollThreshold);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex justify-center w-full min-h-screen overflow-x-hidden">
      {/* <div className="absolute inset-0 z-0 h-screen overflow-hidden pointer-events-none">
        <div className="bg-glow-overlay" />
        <div className="bg-noise-overlay" />
      </div> */}

      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div className="relative flex flex-col flex-1 min-h-screen transition-all duration-300">
        <div className="fixed top-0 left-0 right-0 z-100 transition-all duration-300">
          <div className="px-3 py-[10px]">
            <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        </div>

        <main className="relative flex justify-center flex-1 w-full">
          <div className="relative w-full">
            <div className="w-full">{children}</div>
          </div>
        </main>

        <div className="relative">
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
