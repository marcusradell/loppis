import { migrate } from "./migrate";
import { seed } from "./seed";
import { initialize } from "./initialize";
import { getSalesItem } from "./get-sales-item";
import { logSalesItem } from "./log-sales-item";

export const main = () => {
  const db = initialize();
  migrate(db);
  seed(db);

  const user = getSalesItem(db);

  logSalesItem(user);
};
