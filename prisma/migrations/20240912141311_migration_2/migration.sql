/*
  Warnings:

  - The `product` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `options` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userEmail` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userEmail" TEXT NOT NULL,
DROP COLUMN "product",
ADD COLUMN     "product" JSONB[];

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "options",
ADD COLUMN     "options" JSONB[];

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "email" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
