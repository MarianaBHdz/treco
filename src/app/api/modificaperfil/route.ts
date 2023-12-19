import { NextResponse } from "next/server";

import {prisma} from '@/app/db'
export async function PUT(req: Request) {
  const url = new URL(req.url);
  const reqData= await req.json();
  const userId = url.searchParams.get('user_id');
  
  console.log('User ID:', userId);
  console.log('Values:', reqData);
  try {
    const updateUser = await prisma.user.update({
        where: {
            id: userId!.toString()
          },
          data: {
            name: reqData.nombreApellido,
            date_of_birth: reqData.fechaNacimiento,
            CURP: reqData.CURP,
            material: reqData.material,
            numCoupons: reqData.numCoupons,
            quantityM: reqData.quantityM,
            unitM: reqData.unitM,
          }
      });


    console.log('Modified:', updateUser);
    return NextResponse.json({ updateUser });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}