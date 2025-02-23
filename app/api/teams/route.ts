import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = 12;

    // Fetch team from database
    const teams = await prisma.team.findMany({
      skip: (page - 1) * pageSize,
      // take: pageSize,
      take: limit ? Number(limit) : pageSize,
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
