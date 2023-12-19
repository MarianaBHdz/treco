/*
  Warnings:

  - Added the required column `material` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numCoupons` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "material" VARCHAR(255) NOT NULL,
ADD COLUMN     "numCoupons" INTEGER NOT NULL;
