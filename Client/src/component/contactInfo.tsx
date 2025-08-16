import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// A reusable input component for our form
const FormInput = ({
  id,
  label,
  type,
  value,
  onChange,
  required = false,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-1 text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <input
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      name={id}
      required={required}
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:outline-none"
    />
  </div>
);

// Data for social media links
const socialLinks = [
  {
    href: "https://web.facebook.com/latera.negatu",
    label: "Facebook",
    icon: FaFacebookF,
    hoverClass: "hover:text-blue-600",
  },
  {
    href: "https://x.com/LateraN202",
    label: "Twitter",
    icon: FaTwitter,
    hoverClass: "hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/latii_nig/",
    label: "Instagram",
    icon: FaInstagram,
    hoverClass: "hover:text-pink-600",
  },
  {
    href: "https://www.linkedin.com/in/latera-nigatu/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    hoverClass: "hover:text-blue-800",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Effect to clear status messages after a few seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000); // Hide after 5 seconds

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [status]);

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

      if (!response.ok) {
        // Try to get the error message from the JSON response body
        const data = await response.json().catch(() => ({
          message: "Failed to send message. Please try again later.",
        }));
        throw new Error(data.message || "Failed to send message");
      }

      // If response is ok, we can assume success
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      setErrorMsg(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
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
              {socialLinks.map(({ href, label, icon: Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-700 transition-colors ${hoverClass}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              id="name"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

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
