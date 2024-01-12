import { NextResponse } from "next/server";
import {prisma} from '@/app/db';

export async function PUT(req: Request) {
    const url = new URL(req.url);
    const reqData= await req.json();
    const tiendaID = url.searchParams.get('id');
    
    console.log('Tienda ID:', tiendaID);
    console.log('Values:', reqData);
    try {
      const updateStore = await prisma.store.update({
          where: {
              id: tiendaID?parseInt(tiendaID):undefined,
            },
            data: {
              business_name: reqData.nombreTienda,
              name_store_manager: reqData.nombreEncargado,
              store_email: reqData.correoElectronico,
              store_number: reqData.numeroTelefono,
              avatar_url: reqData.avatar_url,
              description: reqData.descripcion, 
            }
        });
  
  
      console.log('Modified:', updateStore);
      return NextResponse.json({ updateStore });
    } catch (error) {
      console.error('Error updating user:', error);
      return NextResponse.error();
    } finally {
      await prisma.$disconnect();
    }
  }