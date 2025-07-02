const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const  app= express()
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SERVER,
        pass: process.env.PASSWORD_SERVER
    }
});

app.post("/send-email", async(req, res) => {
    const {name, email, message} = req.body;
    
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

    const mailOptions= {
        from:process.env.EMAIL_SERVER,
        to:process.env.EMAIL,
        subject: `New message from ${name}`,
        replyTo:email,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `,
        text: message,
    };
    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Email sent successfully"});
    }
    catch(error){
        console.log("Error sending email:", error)
        res.status(500).json({message: "Error sending email", error: error.message});
    }
})