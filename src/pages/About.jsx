import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="bg-gray-50 text-gray-900 py-28 px-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          We build modern, efficient manufacturing software. This page is a
          placeholder—add your company story, mission, and milestones here.
        </p>
      </div>
    </motion.section>
  );
}
