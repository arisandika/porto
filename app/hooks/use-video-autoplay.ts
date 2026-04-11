"use client";

import { useEffect, useRef } from "react";

export const useVideoAutoplay = (isVideo: boolean) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);
    
    return () => observer.disconnect();
  }, [isVideo]);

  return videoRef;
};