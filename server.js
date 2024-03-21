const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth:{
        user: 'tylerfruik@gmail.com',
        pass: 'Test1ng123'
      }
    });

    let mailOptions = {
      from: 'tylerfruik@gmail.com',
      to: 'gbcxosrs1@gmail.com',
      subject: '!!PORTFOLIO MESSAGE',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
