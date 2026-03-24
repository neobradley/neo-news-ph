import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { resolvePort } from "./index.js";

// Feature: project-initialization, Property 2: PORT environment variable controls listen port
describe("Property 2: PORT environment variable controls listen port", () => {
  it("resolvePort returns the port from PORT env var", () => {
    fc.assert(
      fc.property(fc.integer({ min: 1024, max: 65535 }), (port) => {
        expect(resolvePort({ PORT: String(port) })).toBe(port);
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: project-initialization, Property 3: Default port when PORT is unset
// Validates: Requirements 4.2
describe("Property 3: Default port when PORT is unset", () => {
  it("resolvePort defaults to 3000 when PORT is not set", () => {
    expect(resolvePort({})).toBe(3000);
  });
});
