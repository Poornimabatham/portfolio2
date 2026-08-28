import React from "react";
import GlowCard from "./GlowCard";

const Education = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="p-2 max-w-6xl mx-auto">
        <h1
          className="flex items-center
           justify-center bg-gray-100
         p-2 rounded-xl shadow-md
          hover:shadow-2xl transition-shadow duration-300
          text-2xl mb-8 tag-line bottom-border"
        >
          Education
        </h1>

        {/* Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Block 1 */}
          <GlowCard className="text-white p-4 py-9" style={{ background: "black" }}>
            <h1 className="text-base py-2">2016-2020</h1>
            <h1 className="text-base py-2">Bachelor of Engineering in Electrical</h1>
            <p className="text-base">Vikrant Institute of Technology and Management</p>
            <p className="text-base">Gwalior (M.P), India</p>
          </GlowCard>

          {/* Education Block 2 */}
          <GlowCard className="text-white p-4 py-9" style={{ background: "black" }}>
            <h1 className="text-base py-2">2015-2016</h1>
            <h1 className="text-base py-2">Higher Secondary School</h1>
            <p className="text-base">New Adarsh Convent Higher Secondary School</p>
            <p className="text-base">Gwalior (M.P), India</p>
          </GlowCard>
        </div>
      </div>
    </div>
  );
};

export default Education;
