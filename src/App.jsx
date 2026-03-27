import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import "./styles/global.css";
import "./styles/responsive.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Activities />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;