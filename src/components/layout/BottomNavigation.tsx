"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/portfolio";
import {
  AppstoreOutlined,
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
} from "@/components/icons";

const navIcons: Record<string, ReactNode> = {
  "/": <HomeOutlined className="text-base" aria-hidden="true" />,
  "/portfolio": <AppstoreOutlined className="text-base" aria-hidden="true" />,
  "/about": <UserOutlined className="text-base" aria-hidden="true" />,
  "/contact": <MessageOutlined className="text-base" aria-hidden="true" />,
};

const BottomNavigation = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="border-border bg-surface/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-ink-muted hover:text-ink"
                }`}
              >
                {navIcons[item.href]}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
