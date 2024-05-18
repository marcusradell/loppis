import { createDb } from "./db/db";
import { getSalesItems } from "./get-sales-items";
import { logSalesItems } from "./log-sales-item";

export const main = async () => {
  const db = createDb();

  const salesItems = await getSalesItems(db);

  logSalesItems(salesItems);
};
