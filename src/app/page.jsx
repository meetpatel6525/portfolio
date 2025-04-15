"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white fixed top-0 left-0 right-0 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-purple-700">
            Meet Bhakhar
          </a>
          <nav className="flex space-x-6 text-base font-medium">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-purple-600 transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-white to-purple-50"
        >
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl font-extrabold text-purple-700">
              Hi, I'm Meet Bhakhar
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A passionate Web Developer focused on clean UI & modern web tech.
            </p>
            <motion.img
              src="/images/log.jpeg"
              alt="Meet Bhakhar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-36 h-36 rounded-full mx-auto mt-6 border-4 border-purple-300 shadow"
            />
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className="bg-white py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-purple-700">About Me</h2>
            <p className="mt-4 text-gray-700 text-lg">
              I build responsive, engaging websites using technologies like
              React, Tailwind CSS, and modern JavaScript. I’m always learning
              and love solving real-world problems through clean code and
              thoughtful design.
            </p>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="bg-gray-100 py-16"
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
            <h2 className="text-3xl font-bold text-purple-700">Projects</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "Industrial Work Website",
                  image: "/images/logo.svg",
                  description:
                    "A industrial all type of  work introduction platform with responsive",
                },
                {
                  id: 2,
                  title: "E-commerce Store",
                  image: "/images/logo.png",
                  description:
                    "A modern e-commerce platform with shopping cart features.",
                },
                {
                  id: 3,
                  title: "Admin Dashboard",
                  image: "/images/shipwall-logo.png",
                  description:
                    "A responsive dashboard for managing data and analytics.",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-purple-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="bg-white py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-700 text-center">
              Contact Me
            </h2>
            <form className="mt-8 space-y-6">
              {["name", "email", "message"].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1 capitalize"
                  >
                    {field}
                  </label>
                  {field !== "message" ? (
                    <input
                      id={field}
                      type={field}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  ) : (
                    <textarea
                      id={field}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-gray-50 border-t border-gray-200 py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Meet Bhakhar. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default Page;
