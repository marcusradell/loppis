import { Db } from "./initialize";

export const migrate = (db: Db) => {
  db.exec(
    "CREATE TABLE IF NOT EXISTS sales_items (id INTEGER PRIMARY KEY, name TEXT, price INTEGER)"
  );
};
