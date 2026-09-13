
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ExperienceDetails from "./components/ExperienceDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div id="about" data-aos="fade-up">
        <HeroSection />
      </div>

      <div id="experience" data-aos="fade-up">
        <Experience />
      </div>

      <div id="education" data-aos="fade-up">
        <Education />
      </div>

      <div id="skills" data-aos="fade-up">
        <Skills />
      </div>

      <div id="projects" data-aos="fade-up">
        <Projects />
      </div>

      <div id="contact" data-aos="fade-up">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Experience Details */}
        <Route
          path="/experience/:id"
          element={<ExperienceDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
