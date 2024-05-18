import Database, { Database as LibsqlDb } from "libsql";

export type Db = LibsqlDb;

export const initialize = () => new Database("data.db");
