"use client";

import { useLoading } from "@/app/context/loading-context";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode, forwardRef } from "react";

interface TransitionLinkProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  children: ReactNode;
  className?: string;
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, className, target, onClick, ...props }, ref) => {
    const { startLoading } = useLoading();
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }

      if (href.toString() === pathname) {
        e.preventDefault();
        return;
      }

      if (target === "_blank" || e.ctrlKey || e.metaKey) {
        return;
      }

      e.preventDefault();
      startLoading();
      router.push(href.toString());
    };

    return (
      <Link
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
