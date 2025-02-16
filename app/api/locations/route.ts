import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const locations = await prisma.tour.findMany({
      distinct: ["location"],
      select: {
        location: true,
      },
    });

    const uniqueLocations = locations.map((tour) => tour.location);

    return NextResponse.json(uniqueLocations);
  } catch (err) {
    console.error("Failed to fetch people:", err);
    return NextResponse.json(
      { error: "Failed to fetch people" },
      { status: 500 }
    );
  }
}
