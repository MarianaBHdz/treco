/*
  Warnings:

  - Added the required column `CURP` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "CURP" VARCHAR(25) NOT NULL;
