import type { Context } from "hono";
import { IndexService } from "../services/index.service.js";

const indexService = new IndexService();

export async function indexHandler(c: Context): Promise<Response> {
  const result = indexService.getHello();
  return c.json(result, 200);
}
