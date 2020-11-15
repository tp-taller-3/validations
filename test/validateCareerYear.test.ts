import { NumberIsTooLargeError, validateCareerYear } from "../src";
import { NumberIsNaNError, NumberIsNotIntegerError, NumberIsTooSmallError } from "../src/Errors";

describe("validateCareerYear", () => {
  it("raises an error for negative numbers", () =>
    expect(() => validateCareerYear()(-23)).toThrow(NumberIsTooSmallError)
  );

  it("raises an error for NaN", () =>
    expect(() => validateCareerYear()(NaN)).toThrow(NumberIsNaNError)
  );

  it("raises an error for float values", () =>
    expect(() => validateCareerYear()(23.33)).toThrow(NumberIsNotIntegerError)
  );

  it("raises an error for zero", () =>
    expect(() => validateCareerYear()(0)).toThrow(NumberIsTooSmallError)
  );

  it("raises an error for values higher than 5", () => {
    expect(() => validateCareerYear()(6)).toThrow(NumberIsTooLargeError);
    expect(() => validateCareerYear()(15)).toThrow(NumberIsTooLargeError);
  });

  it("does not raise an error for values between 1 and 5", () => {
    expect(() => validateCareerYear()(1)).not.toThrow();
    expect(() => validateCareerYear()(2)).not.toThrow();
    expect(() => validateCareerYear()(3)).not.toThrow();
    expect(() => validateCareerYear()(4)).not.toThrow();
    expect(() => validateCareerYear()(5)).not.toThrow();
  });
});
