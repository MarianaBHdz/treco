import {prisma} from '@/app/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('user_id');

    const user = await prisma.user.findUnique({
      where: {
        id: userId!.toString()
      },
      select: {
        name: true,
        email: true,
        role: true,
        date_of_birth: true,
        CURP: true,
        avatar_url: true,
        u_coupons: true,
        stores: true,
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

export async function POST(req: Request) {
  const reqData= await req.json();
  const {user} = reqData;
  const {id, user_metadata, email} = user;
  const {full_name, avatar_url, CURP} = user_metadata;

  try {
    const user = await prisma.user.upsert({
      where: {
        id: id.toString()
      },
      update: {
        email,
      },
      create: {
        id: id.toString(),
        name: full_name,
        email,
        role: 'CONSUMER', 
        avatar_url,
        CURP,
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