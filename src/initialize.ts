import { Client, createClient } from "@libsql/client";

export type Db = Client;

export const initialize = () =>
  createClient({
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  });
