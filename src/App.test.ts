import { describe, it, expect } from "vitest";
import { add } from "./Add";

describe("add function", () => {
  it("should return the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);

    expect(add(-1, -2)).toBe(-3);

    expect(add(1, -2)).toBe(-1);

    expect(add(0, 5)).toBe(5);
  });
});
