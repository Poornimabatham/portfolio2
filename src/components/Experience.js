import React from "react";

const Experience = () => {
  return (
    <>
      <div id="experience" className="p-6 max-w-6xl mx-auto">
        <h1 className="flex items-center justify-center bg-gray-100 p-3 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-8">
          Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Box - Experience */}
          <div
            className="bg-black-100 text-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            style={{
              border: "2px solid white",
            }}
          >
            {/* Job 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="italic">(Ubitech Solutions Pvt. Ltd.)</p>
              <p className="text-sm mb-2">📅 09/2023 - Present | 📍 Gwalior</p>
              <h3 className="text-xl my-6 underline font-semibold">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Developed and optimized RESTful APIs to enhance application
                  functionality and ensure seamless frontend-backend
                  communication.
                </li>
                <li>
                  Integrated payment modules and handled webhook callbacks for
                  real-time updates and transaction validation.
                </li>
                <li>
                  Built permission-based approval systems for managing access
                  levels across Time-Off, Department, Profile, and Attendance
                  modules.
                </li>
                <li>
                  Implemented request and approval workflows for various HR
                  modules including leave, attendance regularization, and shift
                  changes.
                </li>
                <li>
                  Contributed to a comprehensive HRMS system, actively working
                  on both web and mobile applications.
                </li>
                <li>
                  Developed mobile attendance marking features for the app with
                  real-time syncing and location tracking.
                </li>
                <li>
                  Wrote clean, efficient, and error-free code, improving system
                  performance and maintainability.
                </li>
                <li>
                  Performed API testing using Postman and automated scripts,
                  ensuring software reliability and smooth integration.
                </li>
                <li>
                  Implemented scalable backend solutions, minimizing performance
                  bottlenecks and ensuring high availability.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Box - Intern Experience */}
          <div
            className="bg-black-100 text-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            style={{
              border: "2px solid white",
            }}
          >
            <div>
              <h3 className="text-xl font-semibold">
                Software Developer Intern
              </h3>
              <p className="italic">(Ubitech Solutions Pvt. Ltd.)</p>
              <p className="text-sm mb-2">📅 02/2023 - 09/2023 | 📍 Gwalior</p>
              <h3 className="text-xl my-6 underline font-semibold">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Developed Login and Logout web pages using HTML, CSS, and
                  JavaScript, improving user experience and functionality.
                </li>
                <li>
                  Worked on Human Resource Management System (HRMS) using
                  frontend technologies like HTML, CSS, JS, and backend
                  technologies like PHP with MySQL.
                </li>
                <li>
                  Gained hands-on experience in API development, enabling smooth
                  communication between frontend and backend systems.
                </li>
                <li>
                  Developed mini projects, including a To-Do List application,
                  and contributed to web panel and dashboard functionalities
                  using Express.js, Node.js, and MySQL.
                </li>
                <li>
                  Managed databases using Node.js and SQL, ensuring efficient
                  data handling and storage solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
