import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navigation() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="hidden sticky top-0 z-50 p-4 lg:flex xl:flex items-center justify-between">
      <div className="w-24"></div>

      <ul className="flex gap-8 text-white text-lg">
        <li>
          <a href="#home" className="nav-underline">Home</a>
        </li>
        <li>
          <a href="#about" className="nav-underline">About</a>
        </li>
        <li>
          <a href="#projects" className="nav-underline">Project</a>
        </li>
        <li>
          <a href="#contact" className="nav-underline">Contact Me</a>
        </li>
      </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mr-24 p-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className="text-white text-xl"
          />
        </button>
    </nav>
  );
}

export default Navigation;
