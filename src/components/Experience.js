import React from "react";
import { useNavigate } from "react-router-dom";
import GlowCard from "./GlowCard";

const Experience = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      Profile: "Full Stack Developer",
      Company: "Solution Analyst Pvt. Ltd.",
      OnboardingDate: "📅 08/2025 - Present | 📍 Ahmedabad",
    },

    {
      Profile: "Software Developer",
      Company: "Ubitech Solutions Pvt. Ltd.",
      OnboardingDate: "📅 09/2023 - 07/2025 | 📍 Gwalior",
    },

    {
      Profile: "Software Developer Intern",
      Company: "Ubitech Solutions Pvt. Ltd.",
      OnboardingDate: "📅 02/2023 - 09/2023 | 📍 Gwalior",
    }
  ];

  return (
    <div id="experience" className="p-6 max-w-7xl mx-auto">
      {/* Heading */}
      <h1
        className="
          flex items-center justify-center
          bg-gray-100
          p-2
          rounded-xl
          shadow-md
          hover:shadow-2xl
          transition-shadow
          duration-300
          mb-8
          tag-line
          bottom-border
        "
      >
        Experience
      </h1>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          items-stretch
        "
      >
        {experiences.map((experience, index) => (
          <GlowCard
            key={index}
            style={{
              background: "black",
              width: "100%",
              height: "100%",
            }}
            className="text-white p-6 flex flex-col"
          >
            {/* Job Title */}
            <h2 className="text-2xl text-white font-bold mb-2">
              {experience.Profile}
            </h2>

            {/* Company */}
            <p className="italic text-gray-300 mb-2">({experience.Company})</p>

            {/* Date */}
            <p className="text-sm text-gray-400 mb-6">
              {experience.OnboardingDate  }
            </p>

            {/* Button at bottom */}
            <div className="mt-auto pt-6">
              <button
                onClick={() => navigate(`/experience/${index}`)}
                className="
                  w-full
                  bg-white
                  text-black
                  py-2
                  px-4
                  rounded-lg
                  font-semibold
                  hover:bg-gray-200
                  hover:scale-105
                  transition
                "
              >
                View Responsibilities
              </button>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
