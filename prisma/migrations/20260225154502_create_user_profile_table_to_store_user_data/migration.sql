/*
  Warnings:

  - You are about to drop the `follows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_followed_user_id_fkey";

-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_following_user_id_fkey";

-- DropTable
DROP TABLE "follows";

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "height_cm" DOUBLE PRECISION,
    "height_ft" DOUBLE PRECISION,
    "weight_kg" DOUBLE PRECISION,
    "weight_lbs" DOUBLE PRECISION,
    "body_type" TEXT,
    "goal" TEXT,
    "fitness_level" TEXT,
    "workout_frequency_per_week" INTEGER,
    "preferred_workout_type" TEXT,
    "available_days" TEXT[],
    "preferred_workout_time" TEXT,
    "session_duration_mins" INTEGER,
    "injuries" TEXT,
    "dietary_preference" TEXT,
    "daily_water_litres" DOUBLE PRECISION,
    "meals_per_day" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_user_id_key" ON "user_profiles"("user_id");

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
