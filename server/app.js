const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodeMailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
  let text = req.body;
  const transport = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      password: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "test@gmail",
    subject: "test email",
    html: `<div className="email"><p>this is your ${text}</p></div>`,
  });
  res.send({ text });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening...");
});
