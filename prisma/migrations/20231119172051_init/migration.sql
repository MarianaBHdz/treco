-- CreateEnum
CREATE TYPE "role" AS ENUM ('SELLER', 'CONSUMER', 'ADMIN');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('AVAILABLE', 'USED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "role" "role" NOT NULL,
    "avatar_url" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "start_date" DATE NOT NULL,
    "finish_date" DATE NOT NULL,
    "start_schedule" TIME(2) NOT NULL,
    "finish_schedule" TIME(2) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "c_user_id" TEXT NOT NULL,
    "event_id" INTEGER NOT NULL,
    "material_id" INTEGER NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "thumbnail_url" VARCHAR(255) NOT NULL,
    "status" "status" NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "owner_user_id" TEXT NOT NULL,
    "business_name" VARCHAR(255) NOT NULL,
    "name_store_manager" VARCHAR(255) NOT NULL,
    "avatar_url" VARCHAR(255),
    "store_email" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "store_number" VARCHAR(255) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "store_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "thumbnail_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventAddress" (
    "id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "postal_code" INTEGER NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "delegation" VARCHAR(255) NOT NULL,
    "neighborhood" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "apartment_number" INTEGER NOT NULL,
    "street_numer" INTEGER NOT NULL,
    "recipients_name" VARCHAR(255) NOT NULL,
    "references" VARCHAR(255) NOT NULL,

    CONSTRAINT "EventAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Idea" (
    "id" SERIAL NOT NULL,
    "material_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "steps" VARCHAR(255) NOT NULL,
    "thumbnail_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Idea_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_c_user_id_fkey" FOREIGN KEY ("c_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_owner_user_id_fkey" FOREIGN KEY ("owner_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAddress" ADD CONSTRAINT "EventAddress_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
