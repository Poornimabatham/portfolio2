import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Solution Analyst Pvt. Ltd.",
      date: "📅 08/2025 - Present | 📍 Gwalior",
      responsibilities: [
        "Collaborated on a car-based microservices platform, scaling architecture across 6+ panels (Admin, Dealer, Sub-dealer, Mobile)",
        "Constructed Angular and Node.js applications, reducing response time and improving system performance",
        "Optimized MySQL/PostgreSQL queries, improving data retrieval efficiency by ~25%",
        "Delivered multi-brand solutions (Hyundai, Ford), supporting multi-tenant showroom operations",
        "Built back-end systems for an Asia banking platform, enabling secure multi-country transactions",
        "Integrated multiple payment gateways, ensuring seamless and reliable cross-border payments",
        "Developed Admin and Merchant modules for transaction processing, monitoring, and reporting",
        "Boosted payment success rates by refining back-end workflows and improving system reliability",
      ],
    },
    {
      title: "Software Developer",
      company: "Ubitech Solutions Pvt. Ltd.",
      date: "📅 09/2023 - Present | 📍 Gwalior",
      responsibilities: [
        "Developed and optimized RESTful APIs to enhance application functionality",
        "Integrated payment modules and handled webhook callbacks",
        "Built permission-based approval systems",
        "Implemented request and approval workflows",
        "Contributed to a comprehensive HRMS system",
        "Developed mobile attendance marking features",
        "Wrote clean and efficient code",
        "Performed API testing using Postman",
        "Implemented scalable backend solutions",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Ubitech Solutions Pvt. Ltd.",
      date: "📅 02/2023 - 09/2023 | 📍 Gwalior",
      responsibilities: [
        "Developed Login and Logout pages using HTML, CSS, and JavaScript",
        "Worked on HRMS using PHP and MySQL",
        "Gained hands-on experience in API development",
        "Developed mini projects and dashboards",
        "Managed databases using Node.js and SQL",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  return (
    <div id="experience" className="p-6 max-w-5xl mx-auto ">
      {/* Heading */}
      <h1
        className="flex items-center justify-center bg-gray-100 p-2 rounded-xl
        shadow-md hover:shadow-2xl transition-shadow duration-300 mb-8 tag-line bottom-border "
      >
        Experience
      </h1>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] sm:left-[-50px] z-10 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Card */}
        <div
          className="w-full bg-black text-white p-6 rounded-2xl shadow-xl
          transition-all duration-500 border border-white"
        >
          <h2 className="text-2xl   text-white font-bold mb-2">
            {experiences[currentIndex].title}
          </h2>

          <p className="italic text-gray-300 mb-2 ">
            ({experiences[currentIndex].company})
          </p>

          <p className="text-sm text-gray-400 mb-6">
            {experiences[currentIndex].date}
          </p>

          <h3 className="text-lg font-semibold underline mb-4">
            Responsibilities
          </h3>

          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base">
            {experiences[currentIndex].responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-[-20px] sm:right-[-50px] z-10 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {experiences.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
