import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default App;
