/*
  Warnings:

  - A unique constraint covering the columns `[email,role]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_phoneNo_role_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_role_key" ON "User"("email", "role");
