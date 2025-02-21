import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const contact = await prisma.contact.findFirst();
    return NextResponse.json(contact);
  } catch (err) {
    console.error("Failed to fetch people:", err);
    return NextResponse.json(
      { error: "Failed to fetch people" },
      { status: 500 }
    );
  }
}
