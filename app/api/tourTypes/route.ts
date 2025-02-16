import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const types = await prisma.type.findMany();
    return NextResponse.json(types);
  } catch (err) {
    console.error("Failed to fetch people:", err);
    return NextResponse.json(
      { error: "Failed to fetch people" },
      { status: 500 }
    );
  }
}
