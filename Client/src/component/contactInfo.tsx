import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons from react-icons

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="mt-6 section-container bg-gradient-to-r from-slate-200 via-white to-slate-200"
    >
      <h2 className="mb-12 text-5xl font-bold section-title">Get In Touch</h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="ml-20">
          <p className="mb-8 font-medium text-black ">
            I'm always open to discussing new projects, opportunities, or
            partnerships. Whether you have a question or just want to say hello,
            I'll try my best to get back to you!
          </p>

          <div className="mb-8 space-y-4 font-medium text-black">
            <div className="flex items-center">
              <span>hello@yourwebsite.com</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700">+251-931-212-489</span>
            </div>
            <div>
              <span className="text-gray-700">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-blue-800"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div></div>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 transition-colors rounded-full bg-secondary hover:bg-secondary/80 text-portfolio-purple"
              aria-label="GitHub"
            ></a>
            <a
              href="#"
              className="p-3 transition-colors rounded-full bg-secondary hover:bg-secondary/80 text-portfolio-purple"
              aria-label="LinkedIn"
            ></a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
              ></textarea>
            </div>

            <button type="submit" className="w-full px-8 py-3 btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
