import { prisma } from '@/app/db';
import { NextResponse } from 'next/server';

export async function GET (req: Request) { 
    // Get query string params
    const url = new URL(req.url);
    console.log(url)
    const id = url.searchParams.get('id');
    const where ={
        id: id?parseInt(id):undefined,
    }

    const store = await prisma.store.findMany({
        where
    });

    const storeDetails = await prisma.store.findFirst({
        where
    });


    await prisma.$disconnect();
    return NextResponse.json({ store, storeDetails }); 
}