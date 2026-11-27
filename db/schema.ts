import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  done: boolean().default(false).notNull(),
});

export const usersTable = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  login: text().notNull(),
  password: text().notNull(),
});
