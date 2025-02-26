import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const sessionId = url.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is missing." },
        { status: 400 }
      );
    }

    // Check if booking already exists by sessionId
    const existingBooking = await prisma.book.findUnique({
      where: { paymentId: sessionId },
    });

    if (existingBooking) {
      return NextResponse.json({
        success: true,
        message: "Booking already processed.",
      });
    }

    // Retrieve the session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if the payment was successful
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment was not successful." },
        { status: 400 }
      );
    }

    const { metadata } = session;
    const { tourId, firstName, lastName, email, phone, peopleNum } = metadata;

    const booking = await prisma.book.create({
      data: {
        tourId: Number(tourId),
        name: firstName,
        surname: lastName,
        email,
        phone,
        peopleNum: Number(peopleNum),
        paymentId: session.id,
        paymentStatus: session.payment_status,
      },
    });

    // Send email notification using Resend
    /* const emailResponse = await resend.emails.send({
      from: "Travel App <youre-domain.com>", //sender   this needs to verify your domain on https://resend.com/domains
      to: email, // recipient
      subject: "Booking Confirmation",
      html: `
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for booking a tour with us!</p>
        <p><strong>Tour ID:</strong> ${tourId}</p>
        <p><strong>People:</strong> ${peopleNum}</p>
        <p><strong>Total Cost:</strong> ${
          session.amount_total / 100
        } ${session.currency.toUpperCase()}</p>
        <p>We look forward to seeing you!</p>
        <p>Best regards,<br>Tour Booking Team</p>
      `,
    }); */

    return NextResponse.json({
      success: true,
      message: "Booking saved successfully!",
    });
  } catch (error) {
    console.error("Error saving payment data:", error);
    return NextResponse.json({ error: `Error: ${error}` }, { status: 500 });
  }
}
