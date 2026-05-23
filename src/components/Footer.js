import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-black p-6 mt-6 text-center rounded-xl mx-6 mb-6 shadow-md">
      <p>Thanks for visiting my portfolio! <span>😊</span></p>
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
