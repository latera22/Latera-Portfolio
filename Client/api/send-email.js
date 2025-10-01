import nodemailer from "nodemailer";

// Basic email validation
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export default async function handler(req, res) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('ERROR: Missing EMAIL_USER or EMAIL_PASS environment variables');
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // It's highly recommended to use an "App Password" for your Gmail account
    // instead of your regular password, especially for production.
    // See: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER ? `"Portfolio Contact" <${process.env.EMAIL_USER}>` : `"Portfolio Contact" <noreply@example.com>`, // This will be the sender's name and email
      to: process.env.EMAIL_USER,
      replyTo: email, // So you can reply directly to the form submitter
      subject: `Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email sending failed:", err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
}
