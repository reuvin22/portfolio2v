import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Navigations({ darkMode, darkModeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    darkModeChange(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <nav
        className={`fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-between transition-colors duration-300
            ${darkMode
            ? "bg-slate-800/50 backdrop-blur-md border-b border-white/20 text-white"
            : "bg-white/50 backdrop-blur-md border-b border-black/10 text-black"}
        `}
        >
      <div className="flex items-center gap-2 lg:hidden">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors cursor-pointer ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
        </button>
      </div>

      <div className="hidden lg:block xl:block relative flex-1 -mr-24">
        <ul className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8 text-lg">
          <li><a href="#home" className="nav-underline">Home</a></li>
          <li><a href="#about" className="nav-underline">About</a></li>
          <li><a href="#projects" className="nav-underline">Project</a></li>
          <li><a href="#contact" className="nav-underline">Contact Me</a></li>
        </ul>
      </div>

      <div
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block h-1 w-8 bg-current rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 bg-current rounded transition-all duration-300 my-1 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 bg-current rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      <div className="hidden lg:flex justify-end w-24">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors cursor-pointer mr-24 ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
        </button>
      </div>

      <div
        className={`absolute top-16 right-0 w-48 shadow-lg rounded-lg p-4 flex flex-col gap-4 transform transition-transform duration-300 lg:hidden ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Project</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a>
      </div>
    </nav>
  );
}

export default Navigations;
