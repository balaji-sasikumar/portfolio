import About from "./About";
import "./App.css";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Awards from "./Rewards";
import Skills from "./Skills";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Awards />
    </>
  );
}

export default App;
