import { NextResponse } from 'next/server';
import { prisma } from '@/app/db';

export async function POST(req: Request) {
  const url = new URL(req.url);
  const storeId = url.searchParams.get('store_id');

  try {
    // Verifica si la tienda existe
    const existingStore = await prisma.store.findUnique({
      where: {
        id: storeId ? parseInt(storeId) : undefined,
      },
    });

    if (!existingStore) {
      return NextResponse.error();
    }

    const requestData = await req.json();
    const { name, thumbnail_url } = requestData;

    // Crea el nuevo producto asociado a la tienda
    const newProduct = await prisma.product.create({
      data: {
        store_id: parseInt(storeId!),
        name,
        thumbnail_url,
      },
    });

    return NextResponse.json({ newProduct });
  } catch (error) {
    console.error('Error creando producto:', error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}