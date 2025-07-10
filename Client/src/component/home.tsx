import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
  return (
    <>
      <div id="home">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white via-gray-200 to-white">
              <div className="flex flex-col items-center justify-center">
                <h4 className="font-bold text-purple-600 text-1xl">
                  Hello I'm
                </h4>
                <h1 className="mt-6 text-6xl font-bold text-black">
                  Latera Nigatu
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-gray-700 opacity-0 md:text-2xl animate-pulse">
                  I create meaningful digital experiences that connect people
                  and drive results
                </p>
                <div className="mt-12 space-x-24 ">
                  <a
                    href="#project"
                    className="px-2 py-2 text-3xl font-semibold text-white bg-gray-900 rounded-md"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-2 py-2 text-3xl font-semibold text-black bg-gray-100 rounded-md"
                  >
                    Contact Me
                  </a>
                </div>
                <div className="mt-32">
                  <a
                    href="#about"
                    className="flex flex-col items-center text-sm text-gray-500 transition-colors hover:text-portfolio-purple"
                  >
                    <span className="mb-2">Scroll Down</span>
                    <KeyboardArrowDownIcon className="text-3xl animate-bounce" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
