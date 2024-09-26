"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { LoginPage } from "./login";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-50 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" href="/">
          <Logo />
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        ></button>
        <nav
          className={`lg:flex lg:space-x-4 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Updates
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contacts
              </Link>
            </li>
          </ul>
          <ul className="flex justify-between items-center">
            <li>
              <LoginPage />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
