"use client";

import { useLayout } from "@/app/hooks/use-layout";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
// import Footer from "../footer/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useLayout();

  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-x-hidden">
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div className="relative flex min-h-screen flex-1 flex-col transition-all duration-300">
        <header className="fixed left-0 right-0 top-0 z-[100] transition-all duration-300">
          <div className="px-3 py-[10px]">
            <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        </header>

        <main className="relative flex w-full flex-1 justify-center">
          <div className="relative w-full">{children}</div>
        </main>

        <div className="relative">
          {/* <Footer show={showFooter} /> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;