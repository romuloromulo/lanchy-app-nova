/*
  Warnings:

  - You are about to drop the column `quantity` on the `OrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;
