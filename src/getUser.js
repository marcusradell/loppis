export const getUser = (db) =>
  db.prepare("SELECT * FROM users WHERE id = ?").get(1);
