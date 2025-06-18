const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const  app= express()
const Port = process.env.PORT || 5000;

dotenv.config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(bodyParser.json());

app.listen(Port, ()=>{
    console.log("Server is running on port " + process.env.PORT || 5000);
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SERVER,
        pass: process.env.PASSWORD_SERVER
    }
});

app.post("/send-email", async(req, res) => {
    const {name, email, message} = req.body;

    const mailOptions= {
        from:email,
        to:process.dotenv.EMAIL,
        subject: `New message through portifolio from ${name}`,
        text: message,
    };
   
    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Email sent successfully"});

    }
    catch(error){
        res.status(500).json({message: "Error sending email", error: error.message});
    }
})