//a webserver to handle contact-form emails

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  console.log(req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@website.com", //change this
      pass: "passKey" //change this
    }
  });

  const htmlMail = `
  <h3>A client sent you a message through the nlt website</h3>
  <h3>Client contacts
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  </h3>
  <h3>Message:</h3>
  <h4>${req.body.message}</h4>
  `;

  // setup email data with unicode symbols
  let mailOptions = {
    from: "nlt",
    to: "someemail@website.com", //change this. list of receivers
    subject: `Re: new contact request through nlt website`, // Subject line
    text: req.body.message, // plain text body
    html: htmlMail // html body
  };

  // send mail with defined transport object
  let info = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).send(error);
      console.log("an error occurred...", error);
    } else {
      res.status(200).send(info);
      console.log("mail sent:", info);
    }
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
