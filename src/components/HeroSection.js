import React from "react";

const HeroSection = () => {
  return (
    <div id="about" className="p-9 max-w-4xl  mx-auto">
      <div
        className="bg-grey-300 text-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
        style={{
          border: "2px solid white",
        }}
      >
        <h1 className="text-3xl font-bold mb-3">Hello!</h1>
        <h1 className="text-2xl font-medium">I'm Poornima Batham</h1>
        <p className="mt-2 text-sm">Software Developer</p>
        <p className="mt-2 text-sm">Address: Gwalior, Madhya Pradesh</p>
        <p
          className="mt-4 mb-9 
         text-medium leading-relaxed "
        >
          With over 2 years of experience in the field of development,
          accompanied by a bachelor's degree in engineering. Proficient in
          backend development, API testing, frontend technologies, and adaptable
          to learning new skills. Demonstrated success in leading impactful
          projects. Actively working with Node.js for backend projects.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
