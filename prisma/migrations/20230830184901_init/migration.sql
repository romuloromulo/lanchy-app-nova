/*
  Warnings:

  - Added the required column `categoria` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `glutenFree` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "glutenFree" BOOLEAN NOT NULL;
