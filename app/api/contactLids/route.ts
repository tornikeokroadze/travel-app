import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import validator from "validator";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, comment } = body;

    // Validate email
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (firstName) {
      // Validate required fields
      if (!firstName || !comment) {
        return NextResponse.json(
          { error: "Missing required fields." },
          { status: 400 }
        );
      }

      const contactLid = await prisma.contactLid.create({
        data: {
          name: firstName,
          email,
          comment,
          subscribe: false,
        },
      });
      return NextResponse.json(contactLid)
    }

    // Check if the email already exists for subscribe
    const existingEmail = await prisma.contactLid.findMany({
      where: {
        email,
        subscribe: true,
      },
    });

    if (existingEmail.length > 0) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    const subscription = await prisma.contactLid.create({
      data: {
        email,
        subscribe: true,
      },
    });

    return NextResponse.json(subscription);
  } catch (err) {
    console.error("Failed to subscribe:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
