"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-white to-purple-50 pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Meet Bhakhar
          </h1>
          <p className="text-xl text-gray-600 mt-2 font-medium">
            Frontend Web Developer
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            I love building beautiful, interactive, and user-focused websites
            using modern web technologies.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/resume.pdf"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.img
          src="/favicon.ico"
          alt="Meet Bhakhar"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border-4 border-purple-300 shadow-md object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
