"use client";

import Image from "next/image";
import { useState } from "react";

interface MediaProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  type?: "image" | "video";
  poster?: string;
  widthVideo?: string;
}

const Media = ({
  src,
  alt = "",
  width,
  height,
  priority = false,
  quality = 90,
  type = "image",
  poster,
  widthVideo,
}: MediaProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <figure className="relative w-full overflow-hidden bg-white transform-gpu">
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-900 animate-pulse">
          <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-light">
            Generating Content...
          </span>
        </div>
      )}

      {type === "video" ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setLoading(false)}
          className={`flex mx-auto ${widthVideo} transform-gpu transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={80}
          onLoad={() => setLoading(false)}
          sizes="(max-width: 768px) 100vw, 80vw"
          className={`w-full h-auto transform-gpu transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </figure>
  );
};

export default Media;
