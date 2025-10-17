import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-indigo-100 text-gray-900 py-28 px-6">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-indigo-900 leading-tight drop-shadow-sm">
            Let’s <span className="text-indigo-600">Talk</span> Business
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Have a project in mind or just want to say hi? Fill out the form and
            our team will reach out within 24 hours.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600 text-xl" />
              <a
                href="mailto:hallo@prodmast.com"
                className="hover:text-indigo-700 transition"
              >
                hallo@prodmast.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-600 text-xl" />
              <a
                href="tel:+100000000"
                className="hover:text-indigo-700 transition"
              >
                +1 000 000 000
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40 z-10 hover:shadow-indigo-200 transition-transform transform hover:-translate-y-1 hover:scale-[1.02]"
        >
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            className="w-full mt-1 mb-5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 outline-none transition"
            placeholder="Your Name"
          />

          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="w-full mt-1 mb-5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 outline-none transition"
            placeholder="your@email.com"
          />

          <label className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full mt-1 mb-6 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 outline-none transition"
            placeholder="Type your message..."
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-500 transition shadow-md hover:shadow-lg"
          >
            <FaPaperPlane />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
