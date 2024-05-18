import { migrate } from "./migrate";
import { seed } from "./seed";
import { initialize } from "./initialize";
import { getUser } from "./getUser";
import { logUser } from "./log-user";

export const main = () => {
  const db = initialize();
  migrate(db);
  seed(db);

  const user = getUser(db);

  logUser(user);
};
