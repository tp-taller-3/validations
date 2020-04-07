import { validateIntegerGreaterThan } from "../src";
import { NumberIsTooSmallError, NumberIsNaNError, NumberIsNotIntegerError } from "../src/Errors";

describe("validateIntegerGreaterThan", () => {
  it("should raise an error if number is negative", () => {
    expect(() => validateIntegerGreaterThan(-23, 0)).toThrow(NumberIsTooSmallError);
  });

  it("should raise an error if number is NaN", () => {
    expect(() => validateIntegerGreaterThan(NaN, 0)).toThrow(NumberIsNaNError);
  });

  it("should raise an error if number is not an integer", () => {
    expect(() => validateIntegerGreaterThan(23.33, 0)).toThrow(NumberIsNotIntegerError);
  });

  it("should not raise an error if number is bigger than zero", () => {
    expect(() => validateIntegerGreaterThan(23, 0)).not.toThrow();
  });

  it("should not raise an error if number is bigger than one hundred", () => {
    expect(() => validateIntegerGreaterThan(200, 100)).not.toThrow();
  });
});
