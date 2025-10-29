const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter (configure with your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-app-password' // replace with app password
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.post('/api/collaboration', async (req, res) => {
  const { email, message } = req.body;
  try {
    // Send email
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com', // your email
      subject: 'Collaboration Request',
      text: message
    };
    await transporter.sendMail(mailOptions);
    res.send({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    // For testing, just log and respond success
    res.send({ success: true, note: 'Email not sent (configure credentials)' });
  }
});

app.post('/api/suggestions', async (req, res) => {
  const { suggestion } = req.body;
  try {
    // Send email
    const mailOptions = {
      from: 'noreply@yourdomain.com',
      to: 'your-email@gmail.com',
      subject: 'New Suggestion',
      text: suggestion
    };
    await transporter.sendMail(mailOptions);
    res.send({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.send({ success: true, note: 'Email not sent (configure credentials)' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    // Send email
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',
      subject: 'Contact Form Message',
      text: `From: ${name}\n${message}`
    };
    await transporter.sendMail(mailOptions);
    res.send({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.send({ success: true, note: 'Email not sent (configure credentials)' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
