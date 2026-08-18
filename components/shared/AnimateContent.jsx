"use client";
import React from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/constants";

const AnimateContent = ({ children, idx, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className={className}
      transition={{ delay: idx * 0.15, duration: 0.5, ease: easing }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateContent;
