import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-20 pb-10 px-6">
      {/* subtle top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 items-start">
          {/* Brand + description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* simple logo mark */}
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full bg-emerald-400/90" />
                <div className="absolute inset-1 rounded-full bg-gray-900" />
                <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-white text-xl font-semibold tracking-tight">
                Prodmast
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Our solutions make production faster and more cost‑effective.
              Contact us for more information.
            </p>
          </div>

          {/* Company */}
          <nav aria-labelledby="footer-company" className="min-w-[12rem]">
            <h4 id="footer-company" className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Events
                </a>
              </li>
            </ul>
          </nav>

          {/* Industries */}
          <nav aria-labelledby="footer-industries" className="min-w-[12rem]">
            <h4
              id="footer-industries"
              className="text-white font-semibold mb-4"
            >
              Industries
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Precision Metalforming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Industrial Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  High Tech & electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Aerospace
                </a>
              </li>
            </ul>
          </nav>

          {/* Products */}
          <nav aria-labelledby="footer-products" className="min-w-[12rem]">
            <h4 id="footer-products" className="text-white font-semibold mb-4">
              Products
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Manufacturing Execution System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Enterprise Resource Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Quality Management System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Supply Chain Planning
                </a>
              </li>
            </ul>
          </nav>

          {/* Get In Touch */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <a
              href="mailto:hallo@prodmast.com"
              className="text-gray-200 hover:text-white inline-block mb-4 underline decoration-emerald-500/30 underline-offset-4"
            >
              hallo@prodmast.com
            </a>
            <div className="flex items-center gap-3">
              <a
                aria-label="LinkedIn"
                href="#"
                className="w-9 h-9 rounded-md bg-gray-800/70 border border-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gray-700/70 hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="w-9 h-9 rounded-md bg-gray-800/70 border border-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gray-700/70 hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="w-9 h-9 rounded-md bg-gray-800/70 border border-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gray-700/70 hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {year} Prodmast, All rights reserved
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
