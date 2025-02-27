import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import validator from "validator";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { tourPrice, tourId, firstName, lastName, email, phone, peopleNum } =
      await req.json();

    const tour = await prisma.tour.findUnique({
      where: {
        id: tourId,
      },
    });

    if (!tour) {
      throw new Error("Tour not found");
    }

    // Validate required fields
    if (
      !tourPrice ||
      !tourId ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !peopleNum
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Validate phone number
    if (!validator.isMobilePhone(phone, "any", { strictMode: false })) {
      return NextResponse.json(
        { error: "Invalid phone number format." },
        { status: 400 }
      );
    }

    // Validate peopleNum
    if (!validator.isInt(peopleNum, { gt: 0 })) {
      return NextResponse.json(
        { error: "Invalid number of people." },
        { status: 400 }
      );
    }

    // Validate tourPrice
    if (
      !validator.isNumeric(String(tourPrice)) ||
      !validator.isNumeric(String(tourId))
    ) {
      return NextResponse.json(
        { error: "Invalid price or tour ID." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      customer_email: email,
      metadata: {
        tourId,
        firstName,
        lastName,
        email,
        phone,
        peopleNum,
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: tour.title,
              description: `Booking for ${peopleNum} people`,
            },
            unit_amount: tourPrice * 100,
          },
          quantity: peopleNum,
        },
      ],
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal ServerError: ${error}` },
      { status: 500 }
    );
  }
}
