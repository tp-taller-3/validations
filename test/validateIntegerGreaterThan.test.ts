import { validateIntegerGreaterThan } from "../src";
import { NumberIsTooSmallError, NumberIsNaNError, NumberIsNotIntegerError } from "../src/Errors";

describe("validateIntegerGreaterThan", () => {
  it("should raise an error if number is negative", () => {
    expect(() => validateIntegerGreaterThan(0)(-23)).toThrow(NumberIsTooSmallError);
  });

  it("should raise an error if number is NaN", () => {
    expect(() => validateIntegerGreaterThan(0)(NaN)).toThrow(NumberIsNaNError);
  });

  it("should raise an error if number is not an integer", () => {
    expect(() => validateIntegerGreaterThan(0)(23.33)).toThrow(NumberIsNotIntegerError);
  });

  it("should not raise an error if number is bigger than zero", () => {
    expect(() => validateIntegerGreaterThan(0)(23)).not.toThrow();
  });

  it("should not raise an error if number is bigger than one hundred", () => {
    expect(() => validateIntegerGreaterThan(100)(200)).not.toThrow();
  });
});
