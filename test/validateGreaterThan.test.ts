import { validateGreaterThan } from "../src";
import { NumberIsTooSmallError, NumberIsNaNError } from "../src/Errors";

describe("validateGreaterThan", () => {
  it("should raise an error if number is negative", () => {
    expect(() => validateGreaterThan(-23, 0)).toThrow(NumberIsTooSmallError);
  });

  it("should raise an error if number is NaN", () => {
    expect(() => validateGreaterThan(NaN, 0)).toThrow(NumberIsNaNError);
  });

  it("should return true if number is bigger than zero", () => {
    expect(validateGreaterThan(23, 0)).toBe(true);
  });

  it("should return true if number is bigger than one hundred", () => {
    expect(validateGreaterThan(200, 100)).toBe(true);
  });
});
