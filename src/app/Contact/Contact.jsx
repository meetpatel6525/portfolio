"use client";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-8">
          Have a project in mind or just want to connect? Drop me a message!
        </p>

        <form className="space-y-6">
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor={field}
                className="block text-sm font-semibold text-pink-400 mb-2 capitalize"
              >
                {field}
              </label>
              {field !== "message" ? (
                <input
                  id={field}
                  type={field}
                  required
                  placeholder={`Enter your ${field}`}
                  className="w-full border border-gray-700 bg-gray-800 text-white rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500"
                />
              ) : (
                <textarea
                  id={field}
                  rows={4}
                  required
                  placeholder="Write your message..."
                  className="w-full border border-gray-700 bg-gray-800 text-white rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 hover:shadow-lg transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
