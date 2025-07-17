import { text, pgTable, varchar, serial, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: varchar("clerk_id", { length: 256 }).notNull(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
});
