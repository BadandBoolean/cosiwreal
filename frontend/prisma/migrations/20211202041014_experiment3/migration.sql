/*
  Warnings:

  - You are about to drop the `Answered` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Progress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Score` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answered" DROP CONSTRAINT "Answered_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_authorId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Answer1" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Answer2" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Answer3" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Answer4" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Answer5" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Answer6" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "progFive" TEXT NOT NULL DEFAULT E'red',
ADD COLUMN     "progFour" TEXT NOT NULL DEFAULT E'red',
ADD COLUMN     "progThree" TEXT NOT NULL DEFAULT E'red',
ADD COLUMN     "progTwo" TEXT NOT NULL DEFAULT E'red',
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Answered";

-- DropTable
DROP TABLE "Progress";

-- DropTable
DROP TABLE "Score";
