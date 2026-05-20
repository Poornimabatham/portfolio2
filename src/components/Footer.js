import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer bg-green-100 text-black p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex justify-center">
        <div class="footer-content ">
          <p>
            Thanks for visiting my portfolio! <span>😊</span>
          </p>
          <p>
            Made with ❤️ by{" "}
            <a href="https://github.com/Poornimabatham" target="_blank">
              Poornimabatham
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
