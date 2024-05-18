import { migrate } from "./migrate";
import { seed } from "./seed";
import { initialize } from "./initialize";
import { getSalesItem } from "./get-sales-item";
import { logSalesItem } from "./log-sales-item";

export const main = async () => {
  const db = initialize();
  await migrate(db);
  await seed(db);

  const user = await getSalesItem(db);

  logSalesItem(user);
};
