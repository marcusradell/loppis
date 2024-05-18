import { Db } from "./initialize";

export type SalesItem = { id: number; name: string; price: number };

export const getSalesItem = async (db: Db) => {
  const dbResult = await db.execute({
    sql: "SELECT * FROM sales_items WHERE id = ?",
    args: [1],
  });
  return dbResult.rows.at(0) as unknown as SalesItem;
};
