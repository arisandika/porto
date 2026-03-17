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
    <div
      className="relative flex justify-center w-full min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="absolute inset-0 z-0 h-screen overflow-hidden pointer-events-none">
        <div className="hero-bg-gradient" />
        <div className="hero-noise" />
      </div>

      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div className="relative z-10 flex flex-col flex-1 min-h-screen transition-all duration-300">
        <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="px-6 py-7 md:px-12">
            <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        </div>

        <main className="relative z-20 flex justify-center flex-1 w-full section-hero">
          <div className="relative z-30 w-full px-6 md:px-12 my-30 md:my-40">
            {children}
          </div>
        </main>

        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
