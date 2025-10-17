import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Simple reveal-on-scroll wrapper
// Props: children, className, delay (seconds)
export default function MotionSection({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}
