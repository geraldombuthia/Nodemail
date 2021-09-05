require('dotenv').config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
});

const mailOptions = {
    from: 'The Idea project',
    to: "geraldombuthia@gmail.com",
    subject: 'My first Email!!!',
    text: "This is my first email. I am so excited!"
};

try {
    transporter.sendMail(mailOptions);
} catch {
    console.log(error);
}