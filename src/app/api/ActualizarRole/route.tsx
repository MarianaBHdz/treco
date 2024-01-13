import { prisma } from '@/app/db';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const reqData = await req.json();
  const { newRole } = reqData;
  const url = new URL(req.url);
  const userId = url.searchParams.get('user_id');

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId!.toString()
      },
      data: {
        role: newRole,
      },
    });

    // Cierra la conexión después de actualizar el usuario
    await prisma.$disconnect();

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    // Manejo de errores
    console.error(error);

    // Cierra la conexión en caso de error también
    await prisma.$disconnect();

    return NextResponse.error();
  }
}