-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('applied', 'interview', 'offer', 'rejected', 'ghosted');

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "jobUrl" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL,
    "notes" TEXT NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
