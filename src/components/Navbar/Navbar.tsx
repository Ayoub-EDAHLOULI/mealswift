"use client";

import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Image
            src="/images/icons/logo.png"
            alt="MealSwift"
            width={50}
            height={50}
          />
          <Link href="/">MealSwift </Link>
        </div>

        <div
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Link href="/signin">
            <button className="navbar__button">Signin</button>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="navbar__icon" onClick={toggleMobileMenu}>
          <Image
            src="/images/icons/menu_list.png"
            alt="Menu"
            width={30}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
