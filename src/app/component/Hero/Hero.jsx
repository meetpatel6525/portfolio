"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-gray-900 to-gray-800 pt-28 pb-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Meet Bhakhar
          </h1>
          <p className="text-xl text-gray-300 mt-2 font-medium">
            Frontend Web Developer
          </p>
          <p className="mt-4 text-lg text-gray-400 max-w-xl">
            I build modern, interactive, and beautiful websites using the latest
            web technologies.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.img
          src="/favicon.ico"
          alt="Meet Bhakhar"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border-4 border-pink-500 shadow-lg object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
