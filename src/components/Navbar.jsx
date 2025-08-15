import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ai17-logo.png"; // Ensure file path is correct

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 text-lg font-medium transition ${
    isActive ? "text-primary" : "text-gray-700 hover:text-primary"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AI17 logo" className="h-20 w-20" /> {/* Increased size */}
          <span className="sr-only">AI17</span>
        </Link>

        {/* Centered Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/solutions" className={navLinkClass}>Solutions</NavLink>
            <NavLink to="/industries" className={navLinkClass}>Industries</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/videos" className={navLinkClass}>Videos</NavLink>
            <NavLink to="/templates" className={navLinkClass}>Templates</NavLink>
          </div>
        </div>
        
      </nav>
    </header>
  );
}