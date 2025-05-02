"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaBuilding } from "react-icons/fa";

const CurrentCompany = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 text-white"
    >
      <div className="max-w-3xl mx-auto p-10 text-center rounded-2xl shadow-xl bg-gray-900">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-pink-500 p-4 rounded-full shadow-lg">
            <FaBuilding className="text-white text-3xl" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-4"
        >
          Current Role
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I’m currently working as a{" "}
          <span className="font-semibold text-white">Front-End Developer</span>{" "}
          at{" "}
          <span className="font-semibold text-white">
            JBRSYS Tech Private LIMITED
          </span>
          , building scalable, high-performance, and user-first web applications
          with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="https://www.jbrsys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Visit Company Website
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 3h7v7m0 0L10 21l-4-4L21 10z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CurrentCompany;
