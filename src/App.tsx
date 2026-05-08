import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
