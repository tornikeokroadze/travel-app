import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

    return NextResponse.json({
      success: true,
      message: "Booking saved successfully!",
    });
  } catch (error) {
    console.error("Error saving payment data:", error);
    return NextResponse.json({ error: `Error: ${error}` }, { status: 500 });
  }
}
