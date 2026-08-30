import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import GlowCard from "./GlowCard";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="flex items-center justify-center bg-gray-100 p-2 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-6 tag-line bottom-border">
        <h1 className="text-2xl">Contact</h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left - Form */}
        <GlowCard className="text-white p-6" style={{ background: "#000" }}>
          <p className="text-sm text-gray-300 mb-6">
            If you have any questions or concerns, please don't hesitate to contact me.
            I am open to any work opportunities that align with my skills and interests.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Your Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-400"
                style={{ backgroundColor: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Your Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-400"
                style={{ backgroundColor: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Your Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-400 resize-none"
                style={{ backgroundColor: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-full tracking-widest"
              style={{ background: "linear-gradient(to right, #24c6dc, #514a9d)" }}
            >
              SEND MESSAGE <FiSend />
            </button>
          </form>
        </GlowCard>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-center gap-6 px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1e293b" }}>
              <MdEmail className="text-cyan-400 text-xl" />
            </div>
            <span className="text-white text-sm">pbatham21@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1e293b" }}>
              <FaPhone className="text-cyan-400 text-lg" />
            </div>
            <span className="text-white text-sm">+91 9329026509</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1e293b" }}>
              <FaMapMarkerAlt className="text-cyan-400 text-lg" />
            </div>
            <span className="text-white text-sm">Gwalior, Madhya Pradesh, India</span>
          </div>

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
                className="w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors text-xl"
                style={{ backgroundColor: "#1e293b" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
