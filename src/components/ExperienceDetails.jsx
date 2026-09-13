
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlowCard from "./GlowCard";

const ExperienceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = [
    {

      responsibilities: [
        "Collaborated on a car-based microservices platform, scaling architecture across 6+ panels (Admin, Dealer, Sub-dealer, Mobile)",
        "Constructed Angular and Node.js applications, reducing response time and improving system performance",
        "Optimized MySQL/PostgreSQL queries, improving data retrieval efficiency by ~25%",
        "Delivered multi-brand solutions (Hyundai, Ford), supporting multi-tenant showroom operations",
        "Built back-end systems for an Asian banking platform, enabling secure multi-country transactions",
        "Integrated multiple payment gateways, ensuring seamless and reliable cross-border payments",
        "Developed Admin and Merchant modules for transaction processing, monitoring, and reporting",
        "Boosted payment success rates by 15% across 500k+ daily transactions by refining back-end microservices and resolving critical bugs in K8s",
      ],
    },

    {
      
      responsibilities: [
       " Handled payment gateway integration using Razorpay and implemented Razorpay webhooks to securely process and track payment transactions",

" Worked on the HRM panel by developing responsive web pages using React.js, building REST APIs with Node.js, and managing database operations",

" Developed and maintained the Permission Management panel and OrgBuilder module, implementing role-based access and permission-related functionality",

" Collaborated with the development team to discuss requirements, troubleshoot issues, and optimize application performance",

" Worked closely with the QA team to ensure smooth project functionality, resolve reported issues, and maintain application quality",

" Handled client-reported issues, identified root causes, and implemented fixes to ensure the project worked smoothly in production",
      ],
    },

    {
     
      responsibilities: [
        "Developed Login and Logout pages using HTML, CSS, and JavaScript",
        "Worked on HRMS using PHP and MySQL",
        "Gained hands-on experience in API development",
        "Developed mini projects and dashboards",
        "Managed databases using Node.js and SQL",
      ],
    },
  ];

  const experience = experiences[Number(id)];

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Experience not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          mb-6
          bg-black
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-gray-800
          transition
        "
      >
        ← Back to Experience
      </button>

      {/* Experience Card */}
      <GlowCard
        style={{
          background: "black",
          width: "100%",
        }}
        className="text-white p-6"
      >
        <h1 className="text-3xl font-bold mb-3">
          {experience.title}
        </h1>

        <p className="text-xl italic text-gray-300 mb-2">
          {experience.company}
        </p>

        <p className="text-gray-400 mb-8">
          {experience.date}
        </p>

        <h2 className="text-2xl text-white font-semibold underline mb-5">
          Responsibilities
        </h2>

        <ul className="list-disc list-inside space-y-4 text-base">
          {experience.responsibilities.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  );
};

export default ExperienceDetails;
