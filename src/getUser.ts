export const getUser = (db: any) =>
  db.prepare("SELECT * FROM users WHERE id = ?").get(1);
