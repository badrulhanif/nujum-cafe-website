"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Xmark } from "iconoir-react";
import clsx from "clsx";

import BrandLogo from "@/components/icons/BrandLogo";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const navItems = siteConfig.navItems.filter((item) => !item.status?.isHidden);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = openMobileMenu ? "hidden" : "";
  }, [openMobileMenu]);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 flex p-4 sm:py-6 sm:px-24 w-full items-center justify-between",
        openMobileMenu
          ? "text-brand bg-custom"
          : scroll || !isHome
          ? "text-white bg-footer-90 backdrop-blur-md"
          : "text-white bg-transparent"
      )}
    >
      <Link href="/" className={clsx(openMobileMenu && "invisible")}>
        <BrandLogo className="w-16 sm:w-24 h-8 sm:h-12" />
      </Link>
      <div className="hidden sm:flex gap-4 p-2 items-center justify-end">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="p-4 hover:text-brand hover:bg-custom"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button
        className="sm:hidden p-2"
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      >
        {openMobileMenu ? (
          <Xmark className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
      {openMobileMenu && (
        <div
          className={clsx(
            "absolute sm:hidden top-full left-0 w-full h-screen shadow-md text-brand bg-custom transform transition-all duration-300 origin-top",
            openMobileMenu
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-8 p-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpenMobileMenu(false)}
                className="text-xl sm:text-2xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
