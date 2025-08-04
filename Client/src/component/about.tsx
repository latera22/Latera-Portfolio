import latoo from "../assets/image/latoo.jpg";
import bg3 from "../assets/image/bg3.png";
const About = () => {
  const skills = [
    "Web Design",
    "UX/UI",
    "Full Stack Development",
    "React",
    "JavaScript",
    "HTML/CSS",
    "TypeScript",
    "Responsive Design",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Figma",
  ];

  return (
    <section
      id="about"
      className="bg-no-repeat min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-16 scroll-smooth"
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: "600px",
        backgroundPosition: "right",
      }}
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-5 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:col-span-2">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
            <img
              src={latoo}
              alt="Latera Nigatu"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/50 to-purple-400/30 mix-blend-multiply"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            About Me
          </h2>

          <p className="text-base font-semibold sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            I'm a passionate designer and developer with a keen eye for detail
            and a love for creating beautiful, functional digital experiences.
            With over 5 years of experience, I’ve worked with various teams to
            bring creative ideas to life.
          </p>

          <p className="text-base font-semibold sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            My approach blends technical skill and creative thinking to deliver
            elegant, user-centered solutions. I’m committed to continuous
            learning and staying current with the latest technologies and design
            trends.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">My Skills</h3>

          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
