import latoo from "../assets/image/latoo.jpg";

const About = () => {
  const skills = [
    "Web Design",
    "UX/UI",
    "Full stack Development",
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
    <section id="about" className="scroll-smooth section-container">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="flex flex-col justify-center md:col-span-2">
          <div className="relative w-full mb-8 overflow-hidden shadow-xl aspect-square rounded-2xl md:mb-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/80 to-portfolio-light-purple/60 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
              <img src={latoo} />
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-5xl font-bold section-title">About Me</h2>
          <div className="text-xl font-semibold">
            <p className="mb-6 text-gray-700">
              I'm a passionate designer and developer with a keen eye for detail
              and a love for creating beautiful, functional digital experiences.
              With over 5 years of experience in the industry, I've had the
              pleasure of working with various clients and teams to bring
              creative ideas to life.
            </p>
            <p className="mb-6 text-gray-700">
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that not only look great but
              also provide exceptional user experiences. I believe in continuous
              learning and staying up-to-date with the latest technologies and
              design trends.
            </p>
          </div>

          <h3 className="mb-4 text-3xl font-bold ">My Skills</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-purple-600 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <a href="" className="px-6 py-3 mt-6 ">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
