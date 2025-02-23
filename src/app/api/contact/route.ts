
/* eslint-disable @typescript-eslint/no-explicit-any */

import nodemailer from 'nodemailer';

export async function POST(req:any) {
  const { name, email, message, captchaToken } = await req.json();

  // Verify reCAPTCHA
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
  const captchaRes = await fetch(verifyUrl, { method: "POST" });
  const captchaJson = await captchaRes.json();

  if (!captchaJson.success) {
    return new Response(JSON.stringify({ error: "CAPTCHA failed" }), { status: 400 });
  }

  // Send Email using Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Example with Gmail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
  }
}
