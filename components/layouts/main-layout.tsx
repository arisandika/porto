"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center w-full min-h-screen overflow-x-hidden">
      <div className="flex w-full h-screen max-w-[1600px] overflow-hidden">
        <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

        <div className="flex flex-col flex-1">
          <div className="p-0 md:px-3">
            <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>

          <div className="overflow-y-auto no-scrollbar">
            <main className="flex justify-center flex-1 w-full">
              <div className="w-full max-w-[1400px] px-4 py-6 md:px-3 md:py-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
