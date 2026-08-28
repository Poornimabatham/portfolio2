import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div id="about" className="p-9 max-w-4xl  mx-auto">
      <div
        className="bg-grey-300 text-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
        style={{
          border: "2px solid white",
        }}
      >
        <h1 className="text-3xl font-bold mb-3">Hello!</h1>
        <h1 className="text-2xl font-medium">I'm Poornima Batham</h1>
        <p className="mt-2 text-sm">Software Developer</p>
        <p className="mt-2 text-sm">Address: Gwalior, Madhya Pradesh</p>
        <p
          className="mt-4 mb-9 
         text-medium leading-relaxed "
        >
          Full Stack Developer with 3 years of experience building scalable web
          applications using modern frontend and back-end technologies.
          Expertise in Node.js, React, Angular, and microservices architecture,
          with a strong focus on performance optimization, secure APIs, and
          seamless third-party integrations. Proven ability to deliver
          high-quality solutions in agile environments
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/poornima-batham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl hover:text-gray-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/poornima-batham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/poornima.batham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white text-2xl hover:text-blue-500 transition-colors" />
          </a>
          <button
            className="text-white text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
            style={{ borderWidth: "2px", borderStyle: "solid", borderColor: "#24c6dc" }}
          >
            Contact me
          </button>
          <a
            href="/resume.pdf"
            download="Poornima_Batham_Resume.pdf"
            className="flex items-center gap-2 text-black text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
            style={{ border: "2px solid white", background: "#24c6dc" }}
          >
            <FiDownload />
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
