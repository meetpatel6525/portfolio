"use client";
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Industrial Work Website",
    image: "/images/logo.svg",
    description:
      "An introduction platform for industrial services with responsive design.",
  },
  {
    id: 2,
    title: "E-commerce Store",
    image: "/images/logo.png",
    description:
      "A modern e-commerce store with cart, product gallery, and user authentication.",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    image: "/images/shipwall-logo.png",
    description:
      "A dashboard for managing orders, users, and analytics with chart integration.",
  },
  {
    id: 4,
    title: "E-commerce Store",
    image: "/images/wellny.png",
    description:
      "A dashboard for managing orders, users, and analytics with chart integration.",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Here are some of the web applications I've built using modern frontend
          tools.
        </motion.p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 text-left"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain bg-gray-100 p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind", "Framer Motion"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
