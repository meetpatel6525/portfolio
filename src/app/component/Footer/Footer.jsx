"use client";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white border-t border-gray-200 py-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Meet Bhakhar. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-500 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-500 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
