import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const faq = await prisma.faq.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(faq);
  } catch (err) {
    console.error("Failed to fetch FAQ:", err);
    return NextResponse.json({ error: "Failed to fetch FAQ" }, { status: 500 });
  }
}
