import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

export type Db = ReturnType<typeof drizzle>;

export const createDb = () =>
  drizzle(
    createClient({
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    })
  );
