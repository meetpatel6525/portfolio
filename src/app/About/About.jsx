"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-white py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 leading-relaxed"
        >
          I’m a self-taught frontend developer skilled in building fast,
          accessible, and user-friendly web apps using modern tools like React,
          Next.js, Tailwind CSS, and Framer Motion. I enjoy turning ideas into
          intuitive digital experiences.
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Redux",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-pink-50 border border-pink-500 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-600 hover:text-white transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 + 0.4 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
