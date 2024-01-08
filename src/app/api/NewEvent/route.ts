import {prisma} from '@/app/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const eventId = url.searchParams.get('event_id');

    const user = await prisma.event.findUnique({
      where: {
        id: eventId
      },
      select: { 
        name: true,
        start_date: true,
        finish_date: true,
        start_schedule: true,
        finish_schedule: true,
        e_coupons: true,
        addresses: true,
      },
    })

    // Cierra la conexión después de obtener el usuario
    await prisma.$disconnect();

    return NextResponse.json({ user });
  } catch (error) {
    // Manejo de errores
    console.error(error);

    // Cierra la conexión en caso de error también
    await prisma.$disconnect();

    return NextResponse.error();
  }
}

export async function PUT(req: Request) {
  const reqData= await req.json();
  const {event} = reqData;
  const {id, event_metadata} = event;
  const {name, start_date, finish_date, start_schedule, finish_schedule} = event_metadata;

  try {
    const user = await prisma.user.upsert({
      where: {
        id: id ?? undefined,
      },
      create: {
        id: id ?? undefined,
        name,
        start_date,
        finish_date,
        start_schedule,
        finish_schedule,
      }
    })

    // Cierra la conexión después de obtener el usuario
    await prisma.$disconnect();

    return NextResponse.json({ user });
  }
  catch (error) {
    // Manejo de errores
    console.error(error);

    // Cierra la conexión en caso de error también
    await prisma.$disconnect();

    return NextResponse.error();
  }
}