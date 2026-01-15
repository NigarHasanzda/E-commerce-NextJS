"use client";

import React, { useState } from "react";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">MyEcom</Link>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="icons">
          <Link href="/wishlist">
            <FavoriteIcon className="icon" />
          </Link>
          <Link href="/cart">
            <ShoppingCartIcon className="icon" />
          </Link>
          <Link href="/profile">
            <AccountCircleIcon className="icon" />
          </Link>
          <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
