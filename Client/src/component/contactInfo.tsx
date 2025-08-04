import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        // If response is not JSON, get text instead
        const text = await response.text();
        throw new Error("Unexpected response from server: " + text);
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("Unexpected error occurred");
      }
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mt-6 scroll-smooth section-container bg-gradient-to-r from-slate-200 via-white to-slate-200"
    >
      <h2 className="mb-12 text-5xl font-bold section-title">Get In Touch</h2>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Left Contact Info */}
        <div className="ml-20">
          <p className="mb-8 font-medium text-black">
            I'm always open to discussing new projects, opportunities, or
            partnerships. Whether you have a question or just want to say hello,
            I'll try my best to get back to you!
          </p>

          <div className="mb-8 space-y-4 font-medium text-black">
            <div className="text-gray-700">📞 +251-931-212-489</div>
            <div className="text-gray-700">📍 Addis Ababa, Ethiopia</div>

            <div className="flex space-x-6">
              <a
                href="https://web.facebook.com/latera.negatu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-700 hover:text-blue-600"
                  size={24}
                />
              </a>
              <a
                href="https://x.com/LateraN202"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter
                  className="text-gray-700 hover:text-blue-400"
                  size={24}
                />
              </a>
              <a
                href="https://www.instagram.com/latii_nig/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  className="text-gray-700 hover:text-pink-600"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/latera-nigatu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn
                  className="text-gray-700 hover:text-blue-800"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:outline-none"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:outline-none"
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full px-8 py-3 btn-primary ${
                status === "sending" && "opacity-60 cursor-not-allowed"
              }`}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback Message */}
            {status === "success" && (
              <p className="mt-2 text-sm text-green-600">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-600">❌ {errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
