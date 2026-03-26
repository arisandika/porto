"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const[heroText, setHeroText] = useState("ARI SANDIKA");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 1500) {
        setHeroText("PROJECTS");
      } else if (scrollY > 300) {
        setHeroText("FULLSTACK");
      } else {
        setHeroText("ARI SANDIKA");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 w-full h-screen overflow-hidden pointer-events-none">
        <div className="overlay-glow-top absolute inset-[96px_24px_auto] z-[1] h-[80vh] md:h-[50%]" />
        <div className="overlay-noise absolute inset-0 z-[2] h-auto w-full opacity-20" />
      </div>

      <section className="bg-hero-radial fixed inset-0 z-[2] flex min-h-[80vh] items-center justify-center md:min-h-screen">
        <h1 className="relative z-10 transition-all duration-300 text-display-heading">
          {heroText}
        </h1>
      </section>
    </>
  );
};

export default Hero;