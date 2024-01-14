import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const productId = url.searchParams.get('id');

  console.log('Product ID:', productId);
  const reqData = await req.json();
  console.log('Values:', reqData);

  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId ? parseInt(productId) : undefined,
      },
      data: {
        name: reqData.name,
        thumbnail_url: reqData.thumbnail_url,
      },
    });

    console.log('Modified:', updatedProduct);
    return NextResponse.json({ updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}