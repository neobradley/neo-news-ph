import { describe, it, expect } from "vitest";
import router from "./index.router.js";

describe("GET /", () => {
  it("returns status 200", async () => {
    const res = await router.request("/");
    expect(res.status).toBe(200);
  });

  it("returns body { message: 'Hello, World!' }", async () => {
    const res = await router.request("/");
    const body = await res.json();
    expect(body).toEqual({ message: "Hello, World!" });
  });
});

import * as fc from "fast-check";

// Feature: project-initialization, Property 1: GET / returns correct status and body
describe("Property 1: GET / returns correct status and body", () => {
  it("always returns status 200 and body { message: 'Hello, World!' }", async () => {
    await fc.assert(
      fc.asyncProperty(fc.constant(undefined), async () => {
        const res = await router.request("/");
        expect(res.status).toBe(200);
        const body = await res.json();
        expect(body).toEqual({ message: "Hello, World!" });
      }),
      { numRuns: 100 }
    );
  });
});
