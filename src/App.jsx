import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 pt-14">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
