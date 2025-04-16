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
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-purple-50 py-20"
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
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Here are some of the web applications I've built using modern frontend
          tools.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain rounded-md mb-4 p-2"
              />
              <h3 className="text-xl font-bold text-purple-600">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["React", "Tailwind", "Framer Motion"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
