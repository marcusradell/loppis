import Database from "libsql";

export const initialize = () => new Database("data.db");
