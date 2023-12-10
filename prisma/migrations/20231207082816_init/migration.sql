/*
  Warnings:

  - You are about to drop the column `occupent` on the `apartments` table. All the data in the column will be lost.
  - Added the required column `occupentID` to the `apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupentName` to the `apartments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `apartments` DROP COLUMN `occupent`,
    ADD COLUMN `occupentID` VARCHAR(191) NOT NULL,
    ADD COLUMN `occupentName` VARCHAR(191) NOT NULL;
