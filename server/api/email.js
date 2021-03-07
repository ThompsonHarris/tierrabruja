const express = require('express');
const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const emailRouter = express.Router();

emailRouter.post('/sendsgemail', (req, res) => {
  const { name, email, subject, text } = req.body;

  sgMail.setApiKey(process.env.SENDGRIDKEY);

  const msg = {
    to: 'info@tierrabruja.com', // Change to your recipient
    from: 'info@tierrabruja.com', // Change to your verified sender
    subject: `${subject} - ${name}`,
    text: `\n name: ${name}
    \n email: ${email}
    \n message: ${text}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send({ message: 'success' });
    })
    .catch((error) => {
      console.error(error);
    });
});

emailRouter.post('/sendemail', (req, res) => {
  const { name, email, subject, text } = req.body;
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  let mailOptions = {
    // should be replaced with real recipient's account
    from: email,
    to: 'tierrabrujalandscapes@gmail.com',
    subject: `${subject} - ${name}`,
    text: `\n name: ${name}
    \n email: ${email}
    \n message: ${text}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.send({ message: 'success' });
});

module.exports = emailRouter;
