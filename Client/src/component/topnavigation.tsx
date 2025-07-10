//import { Home } from "@mui/icons-material";
//import About from "./about";
//import Project from "./project";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 text-3xl font-bold text-black bg-gray-200">
        <h1 className="justify-start text-lg font-semibold">My Portfolio</h1>
        <div className="items-baseline pl-24 space-x-20 text-semibold">
          <a href="">Home</a>
          <a href="#about"> About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
