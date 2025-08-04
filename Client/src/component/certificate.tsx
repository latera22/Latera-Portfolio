import andDeveloper from "../assets/image/andDeveloper.jpg";
import bg1 from "../assets/image/bg1.png";
function Certificate() {
  return (
    <>
      <div
        className="bg-gray-100 bg-no-repeat"
        style={{ backgroundImage: `url(${bg1}) `, backgroundSize: "800px" }}
      >
        <div
          id="certificate"
          className="mt-6 container mx-auto  px-4 py-16 sm:px-6 lg:px-16  "
        >
          <div className="  p-4 text-3xl text-center font-bold">
            <h1>Certificates and CV</h1>
          </div>
          <div className="flex flex-col lg:flex-row  mt-4">
            <div>
              <p className="text-left p-4 text-lg font-semibold ml-10 w-full md:w-[90%]">
                I have earned professional certificates in software development,
                web technologies, and related fields. These validate my
                technical skills and growth in the industry.
              </p>
              <p className="text-left p-4 text-lg font-semibold ml-10 w-full md:w-[90%]">
                Each certification reflects my dedication to continuous learning
                and has equipped me with practical knowledge I apply directly to
                real-world projects.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-4">
              <div className="flex flex-col ">
                <div className="ml-10 items-center md:flex-row mt-4">
                  <img
                    src={andDeveloper}
                    alt="Certificate for Fundamentals of Mobile App Development from Udemy"
                    className="object-contain max-h-80 max-w-80 ml-7 p-7 "
                  />
                  <div className="text-gray-700 bg-slate-100 rounded-lg p-4 ml-7">
                    <h2 className="text-xl font-medium">
                      Fundamental of mobile app
                    </h2>
                    <h2 className="text-xl font-medium items-center">
                      development from Udemy
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="ml-10 items-center md:flex-row mt-4">
                  <img
                    src={andDeveloper}
                    alt="Certificate for Fundamentals of Mobile App Development from Udemy"
                    className="object-contain max-h-80 max-w-80 ml-7 p-7 "
                  />
                  <div className="text-gray-700 bg-slate-100 rounded-lg p-4 ml-6">
                    <h2 className="text-xl font-medium">
                      Data Analysis Fundamentals
                    </h2>
                    <h2 className="text-xl font-medium items-center">
                      development from Udemy
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14 flex flex-col items-center justify-center text-3xl font-bold">
            <h2>
              You can download my CV and certificates from the links below
            </h2>
            <a
              href="/pdf/lateraCV.pdf"
              download="Latera_Nigatu_CV.pdf"
              className="bg-pink-600 text-white font-medium rounded-lg px-4 py-2 mt-4 hover:bg-gray-800 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Certificate;
