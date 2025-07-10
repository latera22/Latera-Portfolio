import "./App.css";
import Navbar from "./component/topnavigation";
import Project from "./component/project";
import About from "./component/about";
import Hero from "./component/home";
import Contact from "./component/contactInfo";
const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="bg-slate-300 ">
        <About />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
