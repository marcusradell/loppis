import { migrate } from "./migrate.js";
import { seed } from "./seed.js";
import { initialize } from "./initialize.js";
import { getUser } from "./getUser.js";
import { logUser } from "./log-user.js";

export const main = () => {
  const db = initialize();
  migrate(db);
  seed(db);

  const user = getUser(db);

  logUser(user);
};
