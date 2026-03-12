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
    <figure className="relative w-full overflow-hidden bg-white">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-12 h-12 bg-white/10 animate-[spin_3s_linear_infinite]" />
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
          className={`flex mx-auto ${widthVideo} transition-opacity duration-500 ${
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
          quality={quality}
          onLoad={() => setLoading(false)}
          sizes="max-width:1608px"
          className={`w-full h-auto transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </figure>
  );
};

export default Media;
