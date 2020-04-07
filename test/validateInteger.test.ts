import { validateInteger } from "../src";
import { NumberIsNaNError, NumberIsNotIntegerError } from "../src/Errors";

describe("validateInteger", () => {
  it("should raise an error if number is NaN", () => {
    expect(() => validateInteger(NaN)).toThrow(NumberIsNaNError);
  });

  it("should raise an error if number is not an integer", () => {
    expect(() => validateInteger(23.02)).toThrow(NumberIsNotIntegerError);
  });

  it("should not raise an error if number is an integer", () => {
    expect(() => validateInteger(23)).not.toThrow();
  });
});
