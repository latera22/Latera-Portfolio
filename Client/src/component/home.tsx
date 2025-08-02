import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-gray-200 to-white px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h4 className="text-purple-600 text-base sm:text-lg font-semibold">
          Hello, I'm
        </h4>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          Latera Nigatu
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 opacity-90 leading-relaxed max-w-2xl mx-auto">
          I create meaningful digital experiences that connect people and drive
          results.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#project"
            className="px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16">
          <a
            href="#about"
            className="flex flex-col items-center text-sm text-gray-500 hover:text-purple-600 transition-colors"
          >
            <span className="mb-1">Scroll Down</span>
            <KeyboardArrowDownIcon className="text-3xl animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
