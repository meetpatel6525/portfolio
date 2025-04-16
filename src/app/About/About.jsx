"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-purple-50 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700">About Me</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          I’m a self-taught frontend developer skilled in building fast,
          accessible, and user-friendly web apps using modern tools like React,
          Next.js, Tailwind CSS, and Framer Motion. I enjoy turning ideas into
          intuitive digital experiences.
        </p>

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
              className="bg-white shadow-sm border border-purple-200 px-4 py-2 rounded-full text-sm font-medium text-purple-700 hover:bg-purple-100 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
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
