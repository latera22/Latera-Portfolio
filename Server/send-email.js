const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const serverless = require("serverless-http");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SERVER,
    pass: process.env.PASSWORD_SERVER,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New message through portfolio from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
});

// DO NOT use app.listen() on Vercel
module.exports = app;
module.exports.handler = serverless(app);
