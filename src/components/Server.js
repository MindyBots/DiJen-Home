const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Your server endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, feedback, userEmailAddress } = req.body;

    // Configure nodemailer with your email service provider details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: userEmailAddress, // Set sender's email as the user's email
      },
    });

    // Define the email content
    const mailOptions = {
      from: userEmailAddress, // Set sender's email as the user's email
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
