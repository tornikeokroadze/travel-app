import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const pageSize = 12;

  try {
    const tours = await prisma.tour.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalTours = await prisma.tour.count();

    return NextResponse.json(
      tours
    );
  } catch (err) {
    console.error('Failed to fetch tours:', err);
    return NextResponse.json(
      { error: 'Failed to fetch tours' },
      { status: 500 }
    );
  }
}
