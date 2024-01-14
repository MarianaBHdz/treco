import { NextResponse } from "next/server";
import { prisma } from "@/app/db";

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const reqData = await req.json();
  const userId = url.searchParams.get('user_id');

  console.log('User ID:', userId);
  console.log('Values:', reqData);

  try {
    // Obtener el usuario actual
    const currentUser = await prisma.user.findUnique({
      where: {
        id: userId!.toString()
      },
    });

    if (!currentUser) {
      console.error('User not found');
      return NextResponse.error();
    }
    // Validar que hay suficientes cupones para restar
    const quantityToSubtract = parseInt(reqData.quantityM, 10);
    if (currentUser.numCoupons < quantityToSubtract) {
      console.error('Not enough coupons to subtract');
      return new Response('Not enough coupons to subtract', { status: 400 });
    }else{
      // Restar la cantidad de cupones
      const updatedNumCoupons = currentUser.numCoupons - parseInt(reqData.quantityM, 10);
      // Actualizar la base de datos con la nueva cantidad de cupones
      const updateUser = await prisma.user.update({
        where: {
          id: userId!.toString()
        },
        data: {
          name: reqData.nombreApellido,
          date_of_birth: reqData.fechaNacimiento,
          CURP: reqData.CURP,
          material: reqData.material,
          numCoupons: updatedNumCoupons,
          quantityM: reqData.quantityM,
          unitM: reqData.unitM,
        },
      });
      console.log('Modified:', updateUser);
      return NextResponse.json({ updateUser });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
