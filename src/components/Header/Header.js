"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

  const alwaysDarkBg = pathname === "/products";

  return (
    <header
      className={`!fixed !top-0 !w-full !z-[1000] !transition-all !duration-300
        ${alwaysDarkBg ? "!bg-[#1F2124] !shadow-lg" : scrolled ? "!bg-[#1F2124] !shadow-lg" : "!bg-transparent"}
      `}
    >
      <div className="!max-w-[1200px] !mx-auto !px-4 !py-3 !flex !items-center !justify-between">
        <div className="!text-[1.6rem] !font-bold">
          <Link href="/" className={`!no-underline ${alwaysDarkBg || scrolled ? "!text-white" : "!text-[#dddddd]"}`}>
            MyEcom
          </Link>
        </div>
        <nav
          className={`!flex !items-center !gap-8  max-md:!fixed max-md:!top-0 max-md:!left-0 max-md:!h-screen max-md:!w-[260px]  max-md:!bg-white max-md:!flex-col max-md:!items-start  max-md:!pt-20 max-md:!pl-6 max-md:!gap-6  max-md:!transition-transform max-md:!duration-300  ${mobileMenuOpen ? "max-md:!translate-x-0" : "max-md:!-translate-x-full"}  `} >
          {["Home", "Products", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={`!font-medium !no-underline !transition
                ${alwaysDarkBg || scrolled ? "!text-white hover:!text-[#ffcc80]" : "!text-[#dddddd] hover:!text-[#E58411]"}
              `}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="!flex !items-center !gap-4">
          {[FavoriteIcon, ShoppingCartIcon, AccountCircleIcon].map(
            (Icon, i) => (
              <Icon
                key={i}
                className={`!cursor-pointer !transition !text-[26px]
                  ${alwaysDarkBg || scrolled ? "!text-white hover:!text-[#ffcc80]" : "!text-[#dddddd] hover:!text-[#E58411] hover:!scale-110"}
                `}
              />
            )
          )}
          <div
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="!hidden max-md:!block !cursor-pointer"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="!text-[28px] !text-black" />
            ) : (
              <MenuIcon className="!text-[28px] !text-black" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
