/*
  Warnings:

  - Added the required column `quantityM` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitM` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "quantityM" VARCHAR(50) NOT NULL,
ADD COLUMN     "unitM" INTEGER NOT NULL;
