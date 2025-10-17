import React from "react";
import { NavLink, Link } from "react-router-dom";
import TiltCard from "./TiltCard";

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Side - App Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          Prodmast
        </Link>

        {/* Middle - Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors ${
                    isActive
                      ? "text-indigo-600"
                      : "hover:text-indigo-600 hover:drop-shadow-sm"
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side - Signup Button */}
        <div>
          <TiltCard intensity={10} scale={1.03} className="inline-block">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Get in touch
            </Link>
          </TiltCard>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
