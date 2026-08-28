import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiJavascript, SiTypescript,
  SiMongodb, SiMysql, SiPostman, SiJenkins, SiKubernetes,
  SiVercel, SiNetlify, SiRender, SiRailway,
} from "react-icons/si";
import GlowCard from "./GlowCard";

const SkillsSection = ({ title, skills }) => (
  <GlowCard className="p-4" style={{ background: "#000" }}>
    <h3 className="text-xl font-semibold mb-4 text-center text-white">{title}</h3>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <GlowCard
          key={index}
          className="flex flex-col items-center justify-center gap-2 p-3"
          style={{ background: "#000" }}
        >
          <div className="text-2xl">{skill.icon}</div>
          <div className="text-sm font-medium text-center text-white">{skill.name}</div>
        </GlowCard>
      ))}
    </div>
  </GlowCard>
);

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
  ];

  const backendSkills = [
    { name: "Node JS", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
  ];

  const toolSkills = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    { name: "Render", icon: <SiRender className="text-green-400" /> },
    { name: "Railway", icon: <SiRailway className="text-purple-400" /> },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="flex items-center justify-center bg-gray-100 p-2 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 text-2xl mb-8 tag-line bottom-border">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        <SkillsSection title="Frontend" skills={frontendSkills} />
        <SkillsSection title="Backend" skills={backendSkills} />
        <SkillsSection title="Tools" skills={toolSkills} />
      </div>
    </div>
  );
};

export default Skills;
