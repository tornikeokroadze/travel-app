/*
  Warnings:

  - A unique constraint covering the columns `[paymentId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Book_paymentId_key" ON "Book"("paymentId");
