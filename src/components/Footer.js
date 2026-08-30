import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GlowCard from "./GlowCard";

const Footer = () => {
  return (
    <footer className="p-6 w-full mb-6">
      <GlowCard className="p-8 text-white" style={{ background: "#000" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Col 1 - Name & tagline */}
          <div className="flex flex-col gap-3">
            <h2
              className="text-xl font-bold"
              style={{
                background: "linear-gradient(to right, #24c6dc, #514a9d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Poornima Batham
            </h2>
            <p className="text-gray-400 text-sm">
              Full Stack Developer · Node.js · React · Angular
            </p>
            <p className="text-gray-500 text-xs">
              Building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-1 tracking-widest uppercase">Quick Links</h3>
            {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-200 w-fit"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 - Contact & Socials */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-1 tracking-widest uppercase">Connect</h3>
            <a href="mailto:pbatham21@gmail.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-cyan-400 transition-colors">
              <MdEmail /> pbatham21@gmail.com
            </a>
            <div className="flex gap-4 mt-2">
              {[
                { icon: <FaGithub />, href: "https://github.com/Poornimabatham" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/poornima-batham" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/poornima.batham" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors text-lg"
                  style={{ backgroundColor: "#1e293b" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 pt-4" style={{ borderTop: "1px solid #1e293b" }}>
          <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by{" "}
            <a
              href="https://github.com/Poornimabatham"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
              style={{
                background: "linear-gradient(to right, #24c6dc, #514a9d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "600",
              }}
            >
              Poornima Batham
            </a>
            &nbsp;· © {new Date().getFullYear()}
          </p>
        </div>
      </GlowCard>
    </footer>
  );
};

export default Footer;
