"use client";

import { useEffect, useState } from "react";

const text = `I’m a fullstack web developer with a focus on building
software for real business operations. My work includes systems for
ERP, recruitment, e-commerce, project management, and other
internal business platforms. Previously, I collaborated with
teams at Nexicon, RHP Cipta Digital, Toffeedev, and 1011 Group.`;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const chars = text.split("");

  const highlightSize = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= chars.length + highlightSize) {
          return 0;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [chars.length]);

  return (
    <h1 className="text-[18px] md:text-[28px] leading-[1.4] md:leading-[1.2] font-normal tracking-tight">
      {chars.map((char, i) => {
        const isActive = i <= activeIndex && i > activeIndex - highlightSize;

        return (
          <span
            key={i}
            className={`transition-colors duration-500 ${
              isActive ? "text-[#ffdf20]" : "text-white opacity-40"
            }`}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
};

export default Hero;
