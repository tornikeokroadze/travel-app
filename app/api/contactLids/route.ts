import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import validator from "validator";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check if the email already exists
    const existingEmail = await prisma.contactLid.findMany({
      where: { email },
    });

    if (existingEmail.length > 0) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 409 });
    }

    const contactLid = await prisma.contactLid.create({
      data: {
        email,
        subscribe: true,
      },
    });

    return NextResponse.json(contactLid);
  } catch (err) {
    console.error("Failed to subscribe:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
