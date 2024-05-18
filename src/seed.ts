import { Db } from "./initialize";

export const seed = (db: Db) =>
  db.exec(
    "INSERT INTO sales_items (id, name, price) VALUES (1, 'Singing Alicorn', 10)"
  );
