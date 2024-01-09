import {prisma} from '@/app/db';
import { NextResponse } from "next/server";

/*model Store {
  id                  Int        @id @default(autoincrement())
  owner_user_id       String
  business_name       String     @db.VarChar(255)
  name_store_manager  String     @db.VarChar(255)
  avatar_url          String?    @db.VarChar(255)
  store_email         String     @db.VarChar(255)
  description         String?    @db.VarChar(255)
  store_number        String     @db.VarChar(255)
  user                User       @relation(fields: [owner_user_id], references: [id])
  products            Product[]
}*/ 

export async function GET(req: Request) {
    try {
      const url = new URL(req.url);
      const userId = url.searchParams.get('user_id');
  
      if (!userId) {
          return NextResponse.json({ error: 'user_id is required' });
      }
  
  
      let user_store = await prisma.store.findMany({
          where: {
              owner_user_id: userId!.toString()
          }
      });
  
      if (user_store.length === 0) {
          return NextResponse.json({ error: 'No store found' });
      }
  
      // Cierra la conexión después de obtener el usuario
      await prisma.$disconnect();
  
      return NextResponse.json({ user_store: user_store[0] });
    } catch (error) {
      // Manejo de errores
      console.error(error);
  
      // Cierra la conexión en caso de error también
      await prisma.$disconnect();
  
      return NextResponse.error();
    }
  }