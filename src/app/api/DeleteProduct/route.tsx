
import { NextResponse } from "next/server";

import {prisma} from '@/app/db'
import { parse } from "path";

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const productId = url.searchParams.get('id');
  
  console.log('product ID:', productId);
  try {
    const updateUser = await prisma.product.delete({
        where: {
            id: parseInt(productId!.toString()),
          },
      });


    console.log('Borrado:', updateUser);
    return NextResponse.json({ message: 'Producto eliminado exitosamente.' });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}