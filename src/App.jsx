import About from "./Sections/About";
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
      </div>
    </main>
  );
};

export default App;
