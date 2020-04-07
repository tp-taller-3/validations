import { validatePositiveNumber } from "../src";
import { NegativeNumberError } from "../src/Errors";

describe("validatePositiveNumber", () => {
  it("should raise an error if number is negative", () => {
    expect(() => validatePositiveNumber(-23)).toThrow(NegativeNumberError);
  });

  it("should return true if number is bigger than zero", () => {
    expect(validatePositiveNumber(23)).toBe(true);
  });

  it("should return true if number is zero", () => {
    expect(validatePositiveNumber(0)).toBe(true);
  });
});
