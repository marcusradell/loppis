export const seed = (db) =>
  db.exec(
    "INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.org')"
  );
