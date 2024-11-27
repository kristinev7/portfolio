"use client";

import "../styles/nav.css";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import TransitionLink from "./TransitionLink"

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <div className="banner navbar-container text-white">
      <span className=" nav-name">Kristine Veneles</span>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <TransitionLink href="/"label="Home" closeMenu={closeMenu}/>
        <TransitionLink href="/Resume" label="Resume" closeMenu={closeMenu}/>
        <TransitionLink href="/Projects" label="Projects" closeMenu={closeMenu}/>
      </nav>
    </div>
  );
}
