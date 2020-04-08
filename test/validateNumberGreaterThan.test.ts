import { validateNumberGreaterThan } from "../src";
import { NumberIsTooSmallError, NumberIsNaNError } from "../src/Errors";

describe("validateNumberGreaterThan", () => {
  it("should raise an error if number is negative", () => {
    expect(() => validateNumberGreaterThan(-23, 0)).toThrow(NumberIsTooSmallError);
  });

  it("should raise an error if number is NaN", () => {
    expect(() => validateNumberGreaterThan(NaN, 0)).toThrow(NumberIsNaNError);
  });

  it("should not raise an error if number is bigger than zero", () => {
    expect(() => validateNumberGreaterThan(23, 0)).not.toThrow();
  });

  it("should not raise an error if number is bigger than one hundred", () => {
    expect(() => validateNumberGreaterThan(200, 100)).not.toThrow();
  });
});
