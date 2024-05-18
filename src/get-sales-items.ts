import { Db } from "./db/db";
import { salesItemsTable } from "./db/schema";

export type SalesItem = { id: number; name: string; price: number };

export const getSalesItems = async (db: Db) =>
  db.select().from(salesItemsTable);
