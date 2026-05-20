import React from "react";

const Projects = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="flex items-center justify-center bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-6">
        <h1 className="text-2xl  ">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {/* Project 1: Attendance App */}
        <div className="bg-black p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://newportal.ubiattendance.com/assets/img/newlogo.png"
            alt="Attendance App"
            className="w-full h-48 object-contain rounded-md mb-3"
          />
          <p className="text-medium text-center">Attendance App</p>
        </div>

        {/* Project 2: HRM Website */}
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e4767b1a6b30def91044e5976532fd5e/ubihrm.png"
            alt="Human Resource Management Website"
            className="w-full h-48 object-contain rounded-md mb-3"
          />
          <p className="text-medium text-center">
            Human Resource Management Website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
