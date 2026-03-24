import { describe, it, expect } from "vitest";
import { IndexService } from "./index.service.js";

describe("IndexService", () => {
  it("getHello() returns { message: 'Hello, World!' }", () => {
    const service = new IndexService();
    expect(service.getHello()).toEqual({ message: "Hello, World!" });
  });
});
