import { useState } from "react";
import LetterGlitch from "./LetterGlitch";

const WhatIdo = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full h-full flex flex-wrap bg-transparent text-white">
      {/* Left Section: Content */}
      <div className="w-1/2 p-10">
        <h1 className="hero_tag text-gray_gradient">What I Do</h1>

        {/* Web Development Section */}
        <div
          className="mb-6 p-6 border-2 rounded-lg border-neon-blue glow-effect"
          onClick={() => toggleSection("web")}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <h3 className="text-2xl font-semibold ">Web Development</h3>
            </div>
            <span className="text-2xl ">
              {openSection === "web" ? "▲" : "▼"}
            </span>
          </div>
          <ul
            className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
              openSection === "web"
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li>Single Page Applications (SPAs) websites</li>
            <li>Landing pages and business</li>
            <li>Portfolio websites</li>
          </ul>
        </div>

        {/* Mobile Development Section */}
        <div
          className="mb-6 p-6 border-2 rounded-lg border-neon-blue glow-effect"
          onClick={() => toggleSection("mobile")}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <h3 className="text-2xl font-semibold ">Mobile Development</h3>
            </div>
            <span className="text-2xl ">
              {openSection === "mobile" ? "▲" : "▼"}
            </span>
          </div>
          <ul
            className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
              openSection === "mobile"
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li>Mobile-friendly web apps</li>
            <li>React Native mobile apps</li>
          </ul>
        </div>

        {/* UI/UX Design & Prototyping Section */}
        <div
          className="mb-6 p-6 border-2 rounded-lg border-neon-blue glow-effect"
          onClick={() => toggleSection("uiux")}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <h3 className="text-2xl font-semibold ">
                UI/UX Design & Prototyping
              </h3>
            </div>
            <span className="text-2xl">
              {openSection === "uiux" ? "▲" : "▼"}
            </span>
          </div>
          <ul
            className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
              openSection === "uiux"
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li>UI design with Figma & Canva</li>
            <li>UX research & improvements</li>
            <li>Prototyping for websites & mobile apps</li>
          </ul>
        </div>
      </div>

      {/* Right Section: LetterGlitch Component */}
      <div className="w-1/2  flex items-center justify-center">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
    </div>
  );
};

export default WhatIdo;
