import { lazy, Suspense, useEffect, useRef, useState } from "react";
import SpaceBackground from "./components/SpaceBackground";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";

const About = lazy(() => import("./Sections/About"));
const Projects = lazy(() => import("./Sections/Projects"));
const RealTerminal = lazy(() => import("./Sections/Terminal"));
const Contact = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));

const App = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contentRef.current && !isLoading) {
      // Calculate the total height of the content sections after loading
      const height = contentRef.current.clientHeight;
      setContentHeight(height);
    }
  }, [isLoading]);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.documentElement.classList.add("loading");
    } else {
      setTimeout(() => {
        document.documentElement.classList.remove("loading");
      }, 100);
    }

    return () => {
      document.documentElement.classList.remove("loading");
    };
  }, [isLoading]);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <main style={{ position: "relative" }}>
      {!isLoading && <Navbar />}
      <Hero onAnimationComplete={handleAnimationComplete} />

      {/* SpaceBackground starts below the Hero section */}
      {!isLoading && <SpaceBackground contentHeight={contentHeight} />}

      {/* Content sections */}
      {!isLoading && (
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto relative z-0"
        >
        <Suspense fallback={null}>
          <About />
          <Projects />
          <RealTerminal />
          <Contact />
          <Footer />
        </Suspense>
        </div>
      )}
    </main>
  );
};

export default App;
