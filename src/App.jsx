import { useEffect, useRef, useState } from "react";
import SpaceBackground from "./components/SpaceBackground";
// import SplashCursor from "./components/SplashCursor";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
// import TechStack from "./Sections/techStack";
import RealTerminal from "./Sections/Terminal";
import WhatIdo from "./Sections/WhatIdo";
// import FallingText from "./components/FallingText";

const App = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Calculate the total height of the content sections
      const height = contentRef.current.clientHeight;
      setContentHeight(height);
    }
  }, []);

  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <Hero />

      {/* SpaceBackground starts below the Hero section */}
      <SpaceBackground contentHeight={contentHeight} />

      {/* Content sections */}
      <div ref={contentRef} className="max-w-7xl mx-auto relative  z-0 ">
        <About />
        <Projects />
        <WhatIdo />
        <RealTerminal />
        {/* <FallingText
          text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
          highlightWords={[
            "React",
            "Bits",
            "animated",
            "components",
            "simplify",
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        /> */}
        {/* <TechStack /> */}
        {/* <SplashCursor /> */}

        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
