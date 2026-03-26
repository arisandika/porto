"use client";

import Link from "next/link";
import Image from "next/image";

const externalIconSrc =
  "https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg";

const Button = ({
  href,
  children,
  showExternalIcon = false,
}: {
  href: string;
  children: React.ReactNode;
  showExternalIcon?: boolean;
}) => (
  <Link
    href={href}
    target={showExternalIcon ? "_blank" : undefined}
    rel={showExternalIcon ? "noopener noreferrer" : undefined}
    className="group relative inline-flex items-center justify-center gap-1 text-xs font-normal text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group"
  >

    <span className="relative z-10">{children}</span>

    {showExternalIcon && (
      <Image
        src={externalIconSrc}
        alt=""
        width={16}
        height={16}
        className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        loading="lazy"
      />
    )}
  </Link>
);

export default Button;
