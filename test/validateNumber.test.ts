import { NumberIsTooSmallError, validateNumber } from "../src";
import { NumberIsNaNError } from "../src/Errors";

describe("validateNumber", () => {
  it("should raise an error if number is NaN", () => {
    expect(() => validateNumber(NaN)).toThrow(NumberIsNaNError);
  });

  it("should not raise an error if number is not NaN", () => {
    expect(() => validateNumber(23)).not.toThrow();
  });

  it("should raise an error if number is larger than the largest 32 bit integer", () => {
    expect(() => validateNumber(Math.pow(2, 32) / 2)).toThrow(
      "El número debe ser menor o igual a 2147483647"
    );
  });

  it("should raise an error if number is smaller than the smallest 32 bit integer", () => {
    expect(() => validateNumber(-1 - Math.pow(2, 32) / 2)).toThrow(
      "El número debe ser mayor o igual a -2147483648"
    );
  });
});
