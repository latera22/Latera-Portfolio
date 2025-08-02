import React from "react";
import img3333 from "../assets/image/3333.png";
import acquiredAsset from "../assets/image/acquired-asset.png";
import img5555 from "../assets/image/5555.png";
import videoEditing from "../assets/image/video-edting.png";
import img4444 from "../assets/image/4444.png";
import librarySystem from "../assets/image/library-system.png";

function Project() {
  const projects = [
    {
      img: img3333,
      title: "Graphic Designing",
    },
    {
      img: acquiredAsset,
      title: "Acquired Asset Management System",
    },
    {
      img: img5555,
      title: "Ethiopian University Courses",
    },
    {
      img: videoEditing,
      title: "Video Editing",
    },
    {
      img: img4444,
      title: "E-Learning Management System",
    },
    {
      img: librarySystem,
      title: "Library Management System",
    },
  ];

  return (
    <section
      id="project"
      className="px-4 py-16 bg-gray-300 scroll-smooth sm:px-6 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ img, title }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={title}
                className="object-contain w-full rounded-lg shadow-2xl max-h-40"
              />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="max-w-3xl mx-auto mt-16 space-y-6 text-center text-gray-800">
          <p className="text-lg font-semibold">
            I have been working on all the above projects during my training and
            have dedicated significant time developing these skills. I am eager
            to collaborate with companies involved in similar projects.
          </p>
          <p className="text-lg font-semibold">
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
