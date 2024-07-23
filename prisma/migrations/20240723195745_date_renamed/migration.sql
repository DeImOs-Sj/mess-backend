/*
  Warnings:

  - You are about to drop the column `Date` on the `Complaint` table. All the data in the column will be lost.
  - Added the required column `date_of_happening` to the `Complaint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Complaint" DROP COLUMN "Date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_of_happening" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
