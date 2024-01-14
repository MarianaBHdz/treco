import {prisma} from '@/app/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
 try {
    const url = new URL(req.url);
    const curp = url.searchParams.get('CURP');

    const user = await prisma.user.findUnique({
      where: {
        CURP: curp as string, //Si quiero que funcione en el schema de prisma debo cambiar el campo de curp de esta manera: CURP      String   @unique
      },
      select: {
        id: true
      },
    })

    // Cierra la conexión después de obtener el usuario
    await prisma.$disconnect();

    if (!user) {
      return NextResponse.json({ message: 'No se encontró un usuario con ese CURP' });
    }

    return NextResponse.json({ userId: user.id });
 } catch (error) {
    // Manejo de errores
    console.error(error);

    // Cierra la conexión en caso de error también
    await prisma.$disconnect();

    return NextResponse.error();
 }
}