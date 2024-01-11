import { NextResponse } from 'next/server';
import { prisma } from '@/app/db';

export async function GET (req: Request) { 
    // Get query string params
    const url = new URL(req.url);
    console.log(url)
    const store_id = url.searchParams.get('id');
    const prodname = url.searchParams.get('prodname');

    const where ={
        store_id: store_id?parseInt(store_id):undefined,
        name: prodname?(prodname).toString():undefined,
    }
    const products = await prisma.product.findMany({
        include: {
            product_images: true
        },where
    });
    
    await prisma.$disconnect();
    return NextResponse.json({ products}); 
    
}