import React from "react";

function Project() {
  const projects = [
    {
      img: "/src/assets/image/3333.png",
      title: "Graphic Designing",
    },
    {
      img: "/src/assets/image/acquired-asset.png",
      title: "Acquired Asset Management System",
    },
    {
      img: "/src/assets/image/5555.png",
      title: "Ethiopian University Courses",
    },
    {
      img: "/src/assets/image/video-edting.png",
      title: "Video Editing",
    },
    {
      img: "/src/assets/image/4444.png",
      title: "E-Learning Management System",
    },
    {
      img: "/src/assets/image/library-system.png",
      title: "Library Management System",
    },
  ];

  return (
    <section
      id="project"
      className="scroll-smooth bg-gray-300 py-16 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map(({ img, title }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={title}
                className="shadow-2xl max-h-40 w-full object-contain rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center space-y-6 text-gray-800">
          <p className="font-semibold text-lg">
            I have been working on all the above projects during my training and
            have dedicated significant time developing these skills. I am eager
            to collaborate with companies involved in similar projects.
          </p>
          <p className="font-semibold text-lg">
            With over two years of experience in graphic design and video
            editing, I bring creativity and precision to every project. My work
            reflects a deep understanding of visual storytelling, brand
            aesthetics, and modern editing tools.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
