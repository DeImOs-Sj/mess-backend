-- CreateTable
CREATE TABLE "Complaint" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "mess" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "student_name" TEXT NOT NULL,
    "student_phno" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "is_clean" BOOLEAN NOT NULL,
    "is_pest_controlled" BOOLEAN NOT NULL,
    "food_handler_protocols" BOOLEAN NOT NULL,
    "complaint_desc" TEXT NOT NULL,
    "suggestion_improvement" TEXT NOT NULL,
    "complaint_category" TEXT NOT NULL,
    "meal_time" TEXT NOT NULL,
    "image_photos" TEXT[],

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);
