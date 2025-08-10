import Home from "./sections/Home";
import About from "./sections/About";
import Navigation from "./components/navigation";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="pt-5 min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}


export default App;
