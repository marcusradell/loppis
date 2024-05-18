import { Db } from "./initialize";

export type SalesItem = { id: number; name: string; price: number };

export const getSalesItem = (db: Db) =>
  db.prepare("SELECT * FROM sales_items WHERE id = ?").get(1) as SalesItem;
