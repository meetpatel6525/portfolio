"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white text-gray-900 pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
            Hi, I'm Meet Bhakhar
          </h1>
          <p className="text-2xl text-gray-700 mt-4 font-semibold">
            Frontend Web Developer
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            I specialize in creating sleek, interactive, and scalable web
            experiences with the latest technologies like React, Tailwind CSS,
            and Framer Motion.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
            >
              <FaDownload /> Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <FaPaperPlane /> Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-full p-1">
              <img
                src="/favicon.ico"
                alt="Meet Bhakhar"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
