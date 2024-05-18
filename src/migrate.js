export const migrate = (db) => {
  db.exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
};
