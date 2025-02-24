
/* eslint-disable @typescript-eslint/no-explicit-any */

import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import axios from "axios";


export async function POST(request: Request) {
  debugger
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();

  const { gRecaptchaToken, firstName, lastName, email, phone, message, service} =
    postData;

  // console.log(
  //   "gRecaptchaToken,firstName,lastName,email:",
  //   gRecaptchaToken?.slice(0, 10) + "...",
  //   firstName,
  //   lastName,
  //   email,
  //   phone,
  //   message,
  //   service
    
  // );
  // console.log("REPONSE", response)

  let res: any;
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    console.log("recaptcha error:", e);
  }

  if (res && res.data?.success) {
 
    const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USERNAM,
            pass: process.env.EMAIL_PASS,
          },
        });
      
        try {
          await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO,
            subject: `Service Request for ${postData.service}`,
            text: `Name: ${postData.firstName} ${postData.lastName} \n phone: ${postData.phone} \n message: ${postData.message}`,
          });
      
          return new NextResponse(JSON.stringify({ success: true, firstName, lastName, email, phone, message, service, score: res.data?.score }), { status: 200 });
        } catch (error) {
          console.log("Error", error)
          return new NextResponse(JSON.stringify({ error: "Email failed" }), { status: 500 });
        }
    
  } else {
    console.log("fail: res.data?.score:", res.data?.score);
    return NextResponse.json({ success: false, name, score: res.data?.score });
  }
}
