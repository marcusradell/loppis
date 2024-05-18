import { Db } from "./initialize";

export const seed = (db: Db) =>
  db.exec(
    "INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.org')"
  );
