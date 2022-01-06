/*
  Warnings:

  - The primary key for the `Answered` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Progress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Score` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Answered" DROP CONSTRAINT "Answered_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Answered_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Answered_id_seq";

-- AlterTable
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "one" SET DEFAULT E'red',
ALTER COLUMN "two" SET DEFAULT E'red',
ALTER COLUMN "three" SET DEFAULT E'red',
ALTER COLUMN "four" SET DEFAULT E'red',
ALTER COLUMN "five" SET DEFAULT E'red',
ADD CONSTRAINT "Progress_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Progress_id_seq";

-- AlterTable
ALTER TABLE "Score" DROP CONSTRAINT "Score_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Score_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Score_id_seq";
