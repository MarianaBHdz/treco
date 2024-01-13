import { NextResponse } from "next/server";
import {prisma} from '@/app/db';

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

export async function POST(req: Request) {
    const url = new URL(req.url);
    const reqData= await req.json();
    const userId = url.searchParams.get('user_id');
    console.log('User ID:', userId);
    try {
      const newStore = await prisma.store.create({
          data: {
                owner_user_id: userId!.toString(),
                business_name: reqData.data.business_name,
                name_store_manager: reqData.data.name_store_manager,
                avatar_url: reqData.data.avatar_url,
                store_email: reqData.data.store_email,
                description: reqData.data.description,
                store_number: reqData.data.store_number,
            },
      });
        console.log('New store created:', newStore.id);
        await prisma.$disconnect();
        return NextResponse.json({ newStore });
    } catch (error) {
        await prisma.$disconnect();
        return NextResponse.error();
    } 
  }