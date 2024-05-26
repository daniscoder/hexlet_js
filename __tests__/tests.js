import { test, expect } from '@jest/globals';

test("Test description", () => {
  const t = () => {
    throw new TypeError("UNKNOWN ERROR");
  };
  expect(t).toThrow(TypeError);
  expect(t).toThrow("UNKNOWN ERROR");
});
