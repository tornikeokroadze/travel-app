import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { parse } from 'url';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const direction = searchParams.get('direction') || '';
  const tripType = searchParams.get('tripType') || '';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = 12;

  const whereConditions: any = {};

  if (direction) {
    whereConditions.location = {
      contains: direction,
      mode: 'insensitive', // Case-insensitive search
    };
  }

  if (tripType) {
    whereConditions.type = {
      name: {
        contains: tripType,
        mode: 'insensitive',
      },
    };
  }

  if (startDate) {
    whereConditions.startDate = { gte: new Date(startDate) };
  }

  if (endDate) {
    whereConditions.endDate = { lte: new Date(endDate) };
  }

  try {
    const tours = await prisma.tour.findMany({
      where: whereConditions,
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        type: true,
      },
      orderBy: {
        startDate: 'asc',
      },
    });

    return NextResponse.json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    return NextResponse.json(
      { error: 'Error fetching tours: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
