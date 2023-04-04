import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}
    Company: ${body.company}\r\n
  `;
  //"infoxukraine@gmail.com"
  const data = {
    to: "infoxukraine@gmail.com",
    from: "pylypenko.art@gmail.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};
