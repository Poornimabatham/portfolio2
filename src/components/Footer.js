import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GlowCard from "./GlowCard";

const Footer = () => {
  return (
    <footer className="p-6 w-full mb-6">
      <GlowCard className="p-8 text-white" style={{ background: "#000" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          

        </div>

        {/* Divider */}
        <div className="mt-8 pt-4">
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
