/*
  Warnings:

  - You are about to drop the `apartments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[appartment]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `appartment` to the `tenants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tenants` ADD COLUMN `appartment` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `apartments`;

-- DropTable
DROP TABLE `employees`;

-- CreateIndex
CREATE UNIQUE INDEX `tenants_appartment_key` ON `tenants`(`appartment`);
