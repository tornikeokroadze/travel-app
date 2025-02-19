/*
  Warnings:

  - Added the required column `paymentId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "paymentId" TEXT NOT NULL;
