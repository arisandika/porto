"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectLayoutProps {
  title: string;
  category: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  desc1: string;
  desc2: string;
  role: string;
  collaborators: string[];
  duration: string;
  tools: string[];
  liveUrl?: string;
  docUrl?: string;
  children: React.ReactNode;
}

const ProjectLayout = ({
  title,
  category,
  thumbnailSrc,
  thumbnailAlt,
  desc1,
  desc2,
  role,
  collaborators,
  duration,
  tools,
  liveUrl,
  docUrl,
  children,
}: ProjectLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(thumbnailSrc);

  return (
    <article className="flex flex-col w-full gap-6 md:gap-8">
      
    </article>
  );
};

export default ProjectLayout;
