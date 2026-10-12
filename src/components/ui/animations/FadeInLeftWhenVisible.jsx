"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadeInLeftWhenVisible({ children }) {
  return (
    <motion.div
      className="!min-w-0 !max-w-full"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
