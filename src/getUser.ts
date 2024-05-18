import { Db } from "./initialize";

export type User = { id: number; name: string; email: string };

export const getUser = (db: Db) =>
  db.prepare("SELECT * FROM users WHERE id = ?").get(1) as User;
