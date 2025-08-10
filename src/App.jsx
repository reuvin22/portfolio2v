import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navigations from "./components/Navigations";

function App() {
  return (
    <div className="pt-5 min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
      <Navigations />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}


export default App;
