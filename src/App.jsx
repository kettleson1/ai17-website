import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book"; // <-- NEW booking page import

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} /> {/* <-- NEW route */}
      </Routes>
    </Router>
  );
}