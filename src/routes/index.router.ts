import { Hono } from "hono";
import { indexHandler } from "./index.handler.js";

const router = new Hono();

router.get("/", indexHandler);

export default router;
