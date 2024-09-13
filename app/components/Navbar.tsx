"use client";

import Link from "next/link";
import "../styles/nav.css";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container text-white">
      <span className="nav-name">Kristine Veneles</span>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/Resume">Resume</Link>
        <Link href="/Projects">Projects</Link>
      </nav>
    </div>
  );
}
