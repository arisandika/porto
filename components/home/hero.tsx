"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 800);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-0 h-screen overflow-hidden pointer-events-none">
        <div className="bg-glow-overlay" />
        <div className="bg-noise-overlay" />
      </div>

      <section className="fixed-center-view section-hero">
        <h1 className="display-heading">
          {scrolled ? "PROJECTS" : "ARI SANDIKA"}
        </h1>
      </section>
    </>
  );
};

export default Hero;
