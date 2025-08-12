import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ai17-logo.png"; // Make sure file name matches exactly

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo & Brand */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src={logo}
          alt="AI17 Logo"
          className="h-12 w-auto object-contain"
        />
        <span className="text-2xl font-bold text-[#E55C20]">AI17</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-[#E55C20] transition">
          Home
        </Link>
        <Link
          to="/solutions"
          className="text-gray-700 hover:text-[#E55C20] transition"
        >
          Solutions
        </Link>
        <Link
          to="/industries"
          className="text-gray-700 hover:text-[#E55C20] transition"
        >
          Industries
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-[#E55C20] transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-[#E55C20] transition"
        >
          Contact
        </Link>
        <Link
          to="/book"
          className="text-[#E55C20] font-semibold border border-[#E55C20] px-4 py-1 rounded hover:bg-[#E55C20] hover:text-white transition"
        >
          Book
        </Link>
      </div>
    </nav>
  );
}