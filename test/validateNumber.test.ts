import { validateNumber } from "../src";
import { NumberIsNaNError } from "../src/Errors";

describe("validateNumber", () => {
  it("should raise an error if number is NaN", () => {
    expect(() => validateNumber(NaN)).toThrow(NumberIsNaNError);
  });

  it("should return true if number is not NaN", () => {
    expect(validateNumber(23)).toBe(true);
  });
});
