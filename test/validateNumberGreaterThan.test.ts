import { validateNumberGreaterThan } from "../src";
import { NumberIsTooSmallError, NumberIsNaNError } from "../src/Errors";

describe("validateNumberGreaterThan", () => {
  it("should raise an error if number is negative", () => {
    expect(() => validateNumberGreaterThan(0)(-23)).toThrow(NumberIsTooSmallError);
  });

  it("should raise an error if number is NaN", () => {
    expect(() => validateNumberGreaterThan(0)(NaN)).toThrow(NumberIsNaNError);
  });

  it("should not raise an error if number is bigger than zero", () => {
    expect(() => validateNumberGreaterThan(0)(23)).not.toThrow();
  });

  it("should not raise an error if number is bigger than one hundred", () => {
    expect(() => validateNumberGreaterThan(100)(200)).not.toThrow();
  });
});
