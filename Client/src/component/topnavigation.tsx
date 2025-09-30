import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Title */}
        <h1 className="text-xl font-semibold text-black">Latera Portfolio</h1>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
          <a href="#home" className="hover:text-purple-600">
            Home
          </a>
          <a href="#about" className="hover:text-purple-600">
            About
          </a>
          <a href="#project" className="hover:text-purple-600">
            Projects
          </a>
          <a href="#certificate" className="hover:text-purple-600">
            Certificate
          </a>
          <a href="#contact" className="hover:text-purple-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg font-medium text-gray-800">
          <a href="#home" className="block hover:text-purple-600">
            Home
          </a>
          <a href="#about" className="block hover:text-purple-600">
            About
          </a>
          <a href="#project" className="block hover:text-purple-600">
            Projects
          </a>
          <a href="#certificate" className="hover:text-purple-600">
            Certificate
          </a>
          <a href="#contact" className="block hover:text-purple-600">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
