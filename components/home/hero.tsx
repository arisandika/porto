"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [heroText, setHeroText] = useState("ARI SANDIKA");
  const [curtainHeight, setCurtainHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const startTransition = 2100;
      const endTransition = 2700;

      let height =
        ((scrollY - startTransition) / (endTransition - startTransition)) * 100;

      height = Math.min(100, Math.max(0, height));

      setCurtainHeight(height);

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
  }, []);

  return (
    <>
      <section className="fixed inset-0 z-[2] flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 bg-hero-radial" />

        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="overlay-glow-top absolute inset-[96px_24px_auto] h-[80vh] md:h-[50%]" />
          <div className="absolute inset-0 w-full h-auto overlay-noise opacity-20" />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 z-[2] bg-[#ed220d] pointer-events-none will-change-[height]"
          style={{ height: `${curtainHeight}%` }}
        />

        <h1 className="relative z-[10] transition-all duration-300 text-display-heading text-white drop-shadow-lg">
          {heroText}
        </h1>
      </section>
    </>
  );
};

export default Hero;