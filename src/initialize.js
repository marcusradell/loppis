import Database from "libsql";

export const initialize = () => new Database(":memory:");
