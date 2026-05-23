import React from "react";
import "../index.css";

const projectCards = [
  {
    id: 1,
    bg: "bg-black",
    content: (
      <img
        src="https://newportal.ubiattendance.com/assets/img/newlogo.png"
        alt="Attendance App"
        className="w-full h-32 object-contain rounded-md mb-3"
      />
    ),
    label: "Attendance App",
    labelColor: "text-white",
  },
  {
    id: 2,
    bg: "bg-white",
    content: (
      <img
        src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e4767b1a6b30def91044e5976532fd5e/ubihrm.png"
        alt="HRM Website"
        className="w-full h-32 object-contain rounded-md mb-3"
      />
    ),
    label: "Human Resource Management Website",
    labelColor: "text-black",
  },
  {
    id: 3,
    bg: "bg-black",
    content: (
      <div className="w-full h-32 flex items-center justify-center rounded-md mb-3">
        <div style={{ border: "3px solid #e6a817", padding: "8px 16px" }}>
          <span style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px" }}>
            OTO<span style={{ color: "#e6a817" }}>LINK</span>
          </span>
        </div>
      </div>
    ),
    label: "OtoLink Project",
    labelColor: "text-white",
  },
  {
    id: 4,
    bg: "bg-black",
    content: (
      <div className="w-full h-32 flex items-center justify-center rounded-md mb-3" style={{ backgroundColor: "#0e8fd4" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="26,4 48,46 4,46" fill="none" stroke="white" strokeWidth="4" />
            <polygon points="26,18 38,40 14,40" fill="#0e8fd4" stroke="white" strokeWidth="3" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: "1.3rem", fontWeight: "800", letterSpacing: "2px", lineHeight: 1.1 }}>ASIA BANKS</span>
            <span style={{ color: "white", fontSize: "0.55rem", letterSpacing: "1px" }}>UNIQUE BANKING SOLUTIONS</span>
          </div>
        </div>
      </div>
    ),
    label: "Asia Banks Website",
    labelColor: "text-white",
  },
];

const Projects = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="flex items-center justify-center bg-gray-100 p-2 rounded-xl shadow-md hover:shadow-2xl 
      transition-shadow duration-300 mb-6 tag-line bottom-border">
        <h1 className="text-2xl">Projects</h1>
      </div>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative">
        <div className="flex gap-6 carousel-track">
          {[...projectCards, ...projectCards].map((project, index) => (
            <div
              key={index}
              className={`${project.bg} min-w-[260px] sm:min-w-[300px] p-4 rounded-xl shadow-md flex-shrink-0`}
            >
              {project.content}
              <p className={`text-sm text-center font-medium ${project.labelColor}`}>{project.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
