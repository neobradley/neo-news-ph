import { serve } from "@hono/node-server";
import { Hono } from "hono";
import indexRouter from "./routes/index.router.js";

export function resolvePort(env: NodeJS.ProcessEnv = process.env): number {
  return env.PORT ? parseInt(env.PORT, 10) : 3000;
}

const app = new Hono();
app.route("/", indexRouter);

if (process.env.NODE_ENV !== "test") {
  const port = resolvePort();
  serve({ fetch: app.fetch, port }, (info) => {
    console.log(`Server listening on http://localhost:${info.port}`);
  });
}
