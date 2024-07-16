-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_photo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Newsletter" (
    "newsletter_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "html_file_url" TEXT NOT NULL,
    "full_screenshot_url" TEXT,
    "top_screenshot_url" TEXT,
    "likes_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("newsletter_id")
);

-- CreateTable
CREATE TABLE "Follower" (
    "follower_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "following_user_id" TEXT NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("follower_id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "tag_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "NewsletterTag" (
    "id" SERIAL NOT NULL,
    "newsletter_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "NewsletterTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTag" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "UserTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "like_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "newsletter_id" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("like_id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "favorite_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "newsletter_id" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("favorite_id")
);

-- CreateTable
CREATE TABLE "FeaturedNewsletter" (
    "id" SERIAL NOT NULL,
    "newsletter_id" INTEGER NOT NULL,
    "featured_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeaturedNewsletter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FeaturedNewsletter_newsletter_id_key" ON "FeaturedNewsletter"("newsletter_id");

-- AddForeignKey
ALTER TABLE "Newsletter" ADD CONSTRAINT "Newsletter_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_following_user_id_fkey" FOREIGN KEY ("following_user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsletterTag" ADD CONSTRAINT "NewsletterTag_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsletterTag" ADD CONSTRAINT "NewsletterTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTag" ADD CONSTRAINT "UserTag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTag" ADD CONSTRAINT "UserTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedNewsletter" ADD CONSTRAINT "FeaturedNewsletter_newsletter_id_fkey" FOREIGN KEY ("newsletter_id") REFERENCES "Newsletter"("newsletter_id") ON DELETE RESTRICT ON UPDATE CASCADE;
