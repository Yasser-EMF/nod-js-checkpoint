// email-sender.js

const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password', // Your password (consider using application-specific passwords or environment variables)
  },
});

// Email options
let mailOptions = {
  from: 'your-email@gmail.com', // Sender address
  to: 'your-email@gmail.com', // Receiver address
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from a Node.js application!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
