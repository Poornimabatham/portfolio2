import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation only once on scroll
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="about" data-aos="fade-up">
        <HeroSection />
      </div>
      <div id="education" data-aos="fade-up">
        <Education />
      </div>
      <div id="experience" data-aos="fade-up">
        <Experience />
      </div>
      <div id="skills" data-aos="fade-up">
        <Skills />
      </div>
      <div id="projects" data-aos="fade-up">
        <Projects />
      </div>
      <div id="footer" data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
