"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface Tab {
  label: string;
  href: string;
}

interface TabsProps {
  tabs?: Tab[];
  className?: string;
}

const Tabs = ({
  tabs = [
    { label: "Work", href: "/" },
    { label: "Info", href: "/about" },
  ],
  className = "",
}: TabsProps) => {
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex(
      (tab) =>
        pathname === tab.href ||
        (tab.href !== "/" && pathname.startsWith(tab.href)),
    );

    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [pathname, tabs]);

  return (
    <div
      className={`inline-flex items-center p-[6px] gap-2 rounded-full group bg-white/5 border border-[#f2f2f21a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2f2f214] hover:border-[#f2f2f233] shadow-[0_9px_30px_#0000001d] hover:shadow-[0_14px_40px_#0000003d] bg-[#111111]/80 backdrop-blur-lg ${className}`}
    >
      <div
        className="absolute top-[-1px] h-[1.5px] rounded-[1px] bg-white/90 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0px_25px_3px_rgba(255,255,255,0.9)]"
        style={{
          left: `${indicatorStyle.left + 30}px`,
          width: `${Math.max(0, indicatorStyle.width - 60)}px`,
        }}
      />

      {tabs.map((tab, index) => {
        const isActive =
          pathname === tab.href ||
          (tab.href !== "/" && pathname.startsWith(tab.href));

        return (
          <Link
            key={tab.label}
            href={tab.href}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`
              relative px-6 py-2 text-sm font-medium rounded-full
              transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isActive
                  ? "text-white bg-[#f2f2f209] hover:bg-[#f2f2f212]"
                  : "text-white/60 hover:text-white"
              }
            `}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
