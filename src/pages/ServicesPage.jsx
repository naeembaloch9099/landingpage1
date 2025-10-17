import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Services from "../Services";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-16" />
      <Services />
    </motion.div>
  );
}
