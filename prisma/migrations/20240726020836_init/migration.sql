-- AlterTable
ALTER TABLE "Newsletter" ADD COLUMN     "youRocks_count" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "YouRock" (
    "youRock_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "newsletter_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "YouRock_pkey" PRIMARY KEY ("youRock_id")
);

-- CreateTable
CREATE TABLE "Award" (
    "award_id" SERIAL NOT NULL,
    "newsletter_id" INTEGER NOT NULL,
    "award_type" TEXT NOT NULL,
    "awarded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("award_id")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "bookmark_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "newsletter_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("bookmark_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YouRock_user_id_newsletter_id_created_at_key" ON "YouRock"("user_id", "newsletter_id", "created_at");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_user_id_newsletter_id_key" ON "Bookmark"("user_id", "newsletter_id");

-- AddForeignKey
ALTER TABLE "YouRock" ADD CONSTRAINT "YouRock_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YouRock" ADD CONSTRAINT "YouRock_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
