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
    className="group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/5"
  >

    <span className="relative z-10">{children}</span>

    {showExternalIcon && (
      <Image
        src={externalIconSrc}
        alt=""
        width={18}
        height={18}
        className="relative z-10"
        loading="lazy"
      />
    )}
  </Link>
);

export default Button;
