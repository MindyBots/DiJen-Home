const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Your server endpoint for sending emails
app.post('/api/send-email', (req, res) => {
  const { firstName, lastName, email, phoneNumber, feedback } = req.body;

  // Configure nodemailer with your email service provider details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohithkalidas@gmail.com',
      pass: 'Rohith@1234',
    },
  });

  // Define the email content
  const mailOptions = {
    from: 'rohithkalidas@gmail.com',
    to: 'ctctechflux@gmail.com', // Replace with your target email
    subject: 'New Feedback Received',
    html: `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Feedback: ${feedback}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
