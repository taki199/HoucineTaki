import { useEffect, useRef, useState } from "react";
import SpaceBackground from "./components/SpaceBackground";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import RealTerminal from "./Sections/Terminal";

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
      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <About />
        <Projects />
        <Contact />
        <RealTerminal />

        <Footer />
      </div>
    </main>
  );
};

export default App;
