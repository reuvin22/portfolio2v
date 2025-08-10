import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navigations from "./components/Navigations";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`pt-5 min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode
          ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white"
          : "bg-white text-black"
        }`}
      style={{ width: "100vw" }}
    >
      <Navigations darkMode={darkMode} darkModeChange={setDarkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
