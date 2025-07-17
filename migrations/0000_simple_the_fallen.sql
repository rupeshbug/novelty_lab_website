CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" varchar(256) NOT NULL,
	"email" text,
	"created_at" timestamp DEFAULT now()
);
