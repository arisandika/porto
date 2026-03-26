"use client";

import { useEffect, useState } from "react";

const StackedColorOverlay = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const triggerElement = document.getElementById("color-change-trigger");
      
      if (!triggerElement) return;

      const triggerTop = triggerElement.offsetTop;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Hitung scroll progress relatif terhadap trigger point
      // 0 = saat trigger mulai masuk viewport, 1 = saat scroll selesai
      const scrollDistance = scrollY - triggerTop + viewportHeight;
      const totalDistance = document.body.scrollHeight - triggerTop;
      
      const progress = Math.max(0, Math.min(1, scrollDistance / totalDistance));
      setScrollProgress(progress);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  // Warna untuk setiap section setelah trigger
  // Sesuaikan dengan jumlah section yang ingin di-stack
  const colors = [
    "rgba(255, 107, 107, 0.9)",   // Section 1 - Red
    "rgba(78, 205, 196, 0.9)",    // Section 2 - Teal
    "rgba(255, 230, 109, 0.9)",   // Section 3 - Yellow
    "rgba(26, 83, 92, 0.9)",      // Section 4 - Dark Blue
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {colors.map((color, index) => {
        // Hitung progress untuk setiap section
        const sectionStart = index / colors.length;
        const sectionEnd = (index + 1) / colors.length;
        
        let sectionProgress = (scrollProgress - sectionStart) * colors.length;
        sectionProgress = Math.max(0, Math.min(1, sectionProgress));

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-75"
            style={{
              backgroundColor: color,
              clipPath: `inset(${100 - sectionProgress * 100}% 0 0 0)`,
              zIndex: colors.length - index,
            }}
          />
        );
      })}
    </div>
  );
};

export default StackedColorOverlay;