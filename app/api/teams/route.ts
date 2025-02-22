import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const limit = url.searchParams.get("limit");

    // Fetch tours from database
    const teams = await prisma.team.findMany({
      take: limit ? Number(limit) : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching team", error },
      { status: 500 }
    );
  }
}
