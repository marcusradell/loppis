import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const salesItemsTable = sqliteTable("sales-items", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
});

export type InsertSalesItem = typeof salesItemsTable.$inferInsert;
export type SelectSalesItem = typeof salesItemsTable.$inferSelect;
