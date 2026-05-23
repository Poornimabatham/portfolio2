import React from "react";
import "../index.css";
const Projects = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div
        className="flex items-center justify-center bg-gray-100 p-2 rounded-xl
       shadow-md hover:shadow-2xl transition-shadow duration-300 mb-6 tag-line bottom-border"
      >
        <h1 className="text-2xl  ">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-6">
        {/* Project 1: Attendance App */}
        <div className="bg-black p-2 sm:p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <img
            src="https://newportal.ubiattendance.com/assets/img/newlogo.png"
            alt="Attendance App"
            className="w-full h-24 sm:h-48 object-contain rounded-md mb-3"
          />
          <p className="text-xs sm:text-medium text-center">Attendance App</p>
        </div>

        {/* Project 2: HRM Website */}
        <div className="bg-black p-2 sm:p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e4767b1a6b30def91044e5976532fd5e/ubihrm.png"
            alt="Human Resource Management Website"
            className="w-full h-24 sm:h-48 object-contain rounded-md mb-3"
          />
          <p className="text-xs sm:text-medium text-center">
            Human Resource Management Website
          </p>
        </div>

        {/* Project 3: OtoLink */}
        <div className="bg-black p-2 sm:p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div className="w-full h-24 sm:h-48 flex items-center justify-center rounded-md mb-3">
            <div
              style={{
                border: "3px solid #e6a817",
                padding: "8px 12px",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "clamp(0.9rem, 3vw, 2rem)",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                OTO<span style={{ color: "#e6a817" }}>LINK</span>
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-medium text-center text-white">
            OtoLink Project
          </p>
        </div>

        {/* Project 4: Asia Banks */}
        <div className="bg-black p-2 sm:p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div
            className="w-full h-24 sm:h-48 flex items-center justify-center rounded-md mb-3"
            style={{ backgroundColor: "#0e8fd4" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                width="clamp(28px, 5vw, 52px)"
                height="clamp(28px, 5vw, 52px)"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="26,4 48,46 4,46"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                />
                <polygon
                  points="26,18 38,40 14,40"
                  fill="#0e8fd4"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "white",
                    fontSize: "clamp(0.8rem, 2.5vw, 1.8rem)",
                    fontWeight: "800",
                    letterSpacing: "2px",
                    lineHeight: 1.1,
                  }}
                >
                  ASIA BANKS
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "clamp(0.5rem, 1.5vw, 0.7rem)",
                    letterSpacing: "1px",
                  }}
                >
                  UNIQUE BANKING SOLUTIONS
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-medium text-center text-white">
            Asia Banks Website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
