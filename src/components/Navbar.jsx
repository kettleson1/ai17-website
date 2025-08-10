import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ai17-logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="AI17 Logo"
            className="h-20 w-auto" // increased height
          />
        </Link>
      </div>
      <div className="flex space-x-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-[#F79C1F]">
          Home
        </Link>
        <Link to="/solutions" className="hover:text-[#F79C1F]">
          Solutions
        </Link>
        <Link to="/industries" className="hover:text-[#F79C1F]">
          Industries
        </Link>
        <Link to="/about" className="hover:text-[#F79C1F]">
          About
        </Link>
        <Link to="/contact" className="hover:text-[#F79C1F]">
          Contact
        </Link>
      </div>
    </nav>
  );
}