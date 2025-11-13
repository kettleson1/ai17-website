import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book"; // <-- NEW booking page import
import Videos from "./pages/Videos"; // Import Videos page if needed
import Templates from "./pages/Templates"; // Import Templates page if needed
import Telemarketer from "./pages/Telemarketer";

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
        <Route path="/videos" element={<Videos />} /> {/* Videos page route */}
        <Route path="/templates" element={<Templates />} /> {/* Templates page route */}
        <Route path="/telemarketer" element={<Telemarketer />} />
      </Routes>
    </Router>
  );
}
