import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons from react-icons

const Contact = () => {
  const [name, setName] = useState<string>(""); // State for name
  const [email, setEmail] = useState<string>(""); // State for email
  const [message, setMessage] = useState<string>(""); // State for message

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { name, email, message }; // Replace with your actual data
    console.log("Sending data:", data);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response received:", result);
    } catch (error) {
      console.error("Error sending Message:", error);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-smooth mt-6 section-container bg-gradient-to-r from-slate-200 via-white to-slate-200"
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
              <span></span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700">+251-931-212-489</span>
            </div>
            <div>
              <span className="text-gray-700">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://web.facebook.com/latera.negatu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://x.com/LateraN202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/latii_nig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-300 hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/latera-nigatu/"
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setMessage(e.target.value)}
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
