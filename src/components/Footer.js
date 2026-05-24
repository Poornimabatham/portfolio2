import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-gray-800 to-gray-900 
text-white 
p-6 
mt-6 
text-center 
rounded-2xl 
mx-6 
mb-6 
shadow-2xl 
shadow-gray-500/40
border border-gray-700
backdrop-blur-md
hover:scale-[1.02]
hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
transition-all 
duration-300"
    >
      {" "}
      <p>
        Thanks for visiting my portfolio! <span>😊</span>
      </p>
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/Poornimabatham"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          Poornimabatham
        </a>
      </p>
    </footer>
  );
};

export default Footer;
