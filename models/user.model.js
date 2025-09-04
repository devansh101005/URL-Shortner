import { timestamp,text,varchar,pgTable, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id:uuid().primaryKey().defaultRandom(),

  firstname: varchar('first_name,{length:55').notNull(),
  lastname: varchar('last_name',{length:55}),

  email:varchar({length:255}).notNull().unique(),

  salt:text().notNull(),
  password:text().notNull(),
  
  createdAt:timestamp('created_at').defaultNow().notNull(),
  updatedAt:timestamp('created_at').defaultNow().notNull(),


  
});
