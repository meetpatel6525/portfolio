"use client";
import React from "react";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Footer from "./component/Footer/Footer";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
