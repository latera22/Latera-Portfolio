import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Simulate sending email or integrate with email service (e.g., nodemailer, Resend, SendGrid)
    console.log("Sending email...", { name, email, message });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email sending failed:", err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
}
