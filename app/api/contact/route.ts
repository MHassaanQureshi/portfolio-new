import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    // ✅ Validate input (important)
    if (!name || !message) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }

    // ✅ Ensure env variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials in .env.local");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // ✅ Better transporter config (more reliable than `service: gmail`)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // ✅ Verify connection (helps debug)
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\n\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("FULL ERROR:", error); // ✅ better debugging
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}