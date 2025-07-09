-- CreateTable
CREATE TABLE "User_Table" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts_Table" (
    "post_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "post_title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Posts_Table_pkey" PRIMARY KEY ("post_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Table_user_name_key" ON "User_Table"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_Table_email_address_key" ON "User_Table"("email_address");

-- AddForeignKey
ALTER TABLE "Posts_Table" ADD CONSTRAINT "Posts_Table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User_Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
