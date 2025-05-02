"use client";
import React from "react";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Footer from "./component/Footer/Footer";
import CurrentCompany from "./component/CurrentCompany/CurrentCompany";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 font-sans scroll-smooth dark:from-black dark:to-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CurrentCompany /> {/* <-- Insert it here */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
