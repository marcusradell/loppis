import { Db } from "./initialize";

export const migrate = (db: Db) => {
  db.exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
};
