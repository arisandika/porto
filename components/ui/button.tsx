"use client";

import Link from "next/link";
import Image from "next/image";
import TransitionLink from "../common/transition-link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showExternalIcon?: boolean;
  active?: boolean; // 1. Tambahkan prop active di sini
}

const externalIconSrc =
  "https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg";

const Button = ({
  href,
  onClick,
  children,
  className = "",
  showExternalIcon = false,
  active = false, // 2. Set default false
}: ButtonProps) => {
  // 3. Tambahkan "bg-white/5" secara permanen jika active bernilai true
  // (Saya juga menghapus duplikasi class "group" yang ada di kode sebelumnya)
  const baseClasses = `group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/5 cursor-pointer ${
    active ? "bg-white/5" : ""
  } ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showExternalIcon && (
        <Image
          src={externalIconSrc}
          alt=""
          width={16}
          height={16}
          // 4. Tambahkan pergeseran permanen pada icon jika active bernilai true
          className={`relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            active ? "translate-x-0.5 -translate-y-0.5" : ""
          }`}
          loading="lazy"
        />
      )}
    </>
  );

  if (href) {
    return (
      <TransitionLink
        href={href}
        target={showExternalIcon ? "_blank" : undefined}
        rel={showExternalIcon ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {content}
      </TransitionLink>
    );
  }

  return (
    <button onClick={onClick} type="button" className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;