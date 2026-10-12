"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { mainNavLinks } from "@/data/navigation";
import { siteName } from "@/lib/site";

const headerActions = [
  { Icon: FavoriteIcon, label: "Wishlist" },
  { Icon: ShoppingCartIcon, label: "Shopping cart" },
  { Icon: AccountCircleIcon, label: "Account" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onDarkHeader = scrolled;

  return (
    <header
      className={`!fixed !top-0 !left-0 !right-0 !w-full !max-w-[100%] !z-[1000] !transition-all !duration-300
        ${onDarkHeader ? "!bg-[#1F2124] !shadow-lg" : "!bg-transparent"}
      `}
    >
      <div className="!max-w-[1200px] !mx-auto !px-4 !py-3 !flex !items-center !justify-between">
        <div className="!text-[1.6rem] !font-bold">
          <Link
            href="/"
            aria-label={`${siteName} home`}
            className={`!flex !items-center !gap-2 !no-underline ${onDarkHeader ? "!text-white" : "!text-[#dddddd]"}`}
          >
            <StorefrontIcon
              className="!text-[1.75rem] !shrink-0 !text-[#E58411]"
              aria-hidden
            />
            <span>{siteName}</span>
          </Link>
        </div>
        <nav
          className={`!flex !items-center !gap-8  max-md:!fixed max-md:!top-0 max-md:!left-0 max-md:!h-screen max-md:!w-[260px]  max-md:!bg-white max-md:!flex-col max-md:!items-start  max-md:!pt-20 max-md:!pl-6 max-md:!gap-6  max-md:!transition-transform max-md:!duration-300  ${mobileMenuOpen ? "max-md:!translate-x-0" : "max-md:!-translate-x-full"}  `}
        >
          {mainNavLinks.map(({ label, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : href.startsWith("/#")
                  ? pathname === "/" && false
                  : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={`!font-medium !no-underline !transition
                  max-md:!text-[#1E1E1E] max-md:hover:!text-[#E58411]
                  ${
                    isActive
                      ? "md:!text-[#ffcc80] md:!underline md:!underline-offset-4"
                      : onDarkHeader
                        ? "md:!text-white md:hover:!text-[#ffcc80]"
                        : "md:!text-[#dddddd] md:hover:!text-[#E58411]"
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="!flex !items-center !gap-4">
          {headerActions.map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="!p-0 !m-0 !border-0 !bg-transparent !leading-none"
            >
              <Icon
                className={`!cursor-pointer !transition !text-[26px]
                  ${onDarkHeader ? "!text-white hover:!text-[#ffcc80]" : "!text-[#dddddd] hover:!text-[#E58411] hover:!scale-110"}
                `}
              />
            </button>
          ))}
          <div
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="!hidden max-md:!block !cursor-pointer"
          >
            {mobileMenuOpen ? (
              <CloseIcon
                className={`!text-[28px] ${onDarkHeader ? "!text-white" : "!text-[#1E1E1E]"}`}
              />
            ) : (
              <MenuIcon
                className={`!text-[28px] ${onDarkHeader ? "!text-white" : "!text-[#1E1E1E]"}`}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
