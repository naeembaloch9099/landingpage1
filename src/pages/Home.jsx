import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Hero from "../Hero";
import Services from "../Services";
import KeyBenefits from "../KeyBenefits";
import PricingPlans from "../PricingPlans";
import Integration from "../Integration";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Services />
      <KeyBenefits />
      <PricingPlans />
      <Integration />
    </motion.div>
  );
}
