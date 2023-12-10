/*
  Warnings:

  - You are about to drop the column `references` on the `EventAddress` table. All the data in the column will be lost.
  - You are about to drop the column `street_numer` on the `EventAddress` table. All the data in the column will be lost.
  - Added the required column `street_number` to the `EventAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventAddress" DROP COLUMN "references",
DROP COLUMN "street_numer",
ADD COLUMN     "street_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "date_of_birth" DATE;
