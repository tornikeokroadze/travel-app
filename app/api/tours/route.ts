import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const bestOffer = url.searchParams.get("bestOffer");
    const duration = url.searchParams.get("duration");
    const limit = url.searchParams.get("limit");
    const id = url.searchParams.get("id");
    const typeId = url.searchParams.get("typeId");
    const adventures = url.searchParams.get("adventures") === "true";
    const experience = url.searchParams.get("experience") === "true";

    let whereClause: any = {};

    if (bestOffer === "true") {
      whereClause.bestOffer = true;
    }

    if (duration) {
      whereClause.duration = Number(duration);
    }

    if (id) {
      whereClause.id = { not: Number(id) };
    }

    // Fetch tours from database
    const tours = await prisma.tour.findMany({
      where: {
        ...whereClause,
        adventures,
        experience,
        ...(typeId ? { typeId: Number(typeId) } : {}),
      },
      take: limit ? Number(limit) : undefined,
      orderBy: { createdAt: "desc" },
      include: { type: true },
    });

    return NextResponse.json(tours);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching tours", error },
      { status: 500 }
    );
  }
}
