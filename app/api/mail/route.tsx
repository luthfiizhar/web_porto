import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: any, response: any) {
  const formData = await request.formData();

  console.log(formData);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Message bot"<luthfiizhar@gmail.com>', // sender address
      to: "izharluthfi@gmail.com", // list of receivers
      subject: `Message from ${formData["first_name"]} ${formData["last_name"]}`, // Subject line
      //text: "gege", // plain text body
      html: `<h1>${formData['Message']}</h1>`, // html body
    });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
