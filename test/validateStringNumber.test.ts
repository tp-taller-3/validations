import { validateStringNumber } from "../src";
import { NumberWithNonDigitCharactersError } from "../src/Errors";

describe("validateStringNumber", () => {
  it("does not throw an error if string has only digits", () => {
    expect(() => validateStringNumber("1234")).not.toThrow();
  });

  it("throws an error if string is empty", () => {
    expect(() => validateStringNumber("")).toThrow(NumberWithNonDigitCharactersError);
  });

  it("throws an error if string has non digits characters", () => {
    expect(() => validateStringNumber("hello")).toThrow(NumberWithNonDigitCharactersError);
  });

  it("throws an error if string has digits and non digits characters", () => {
    expect(() => validateStringNumber("hello1234")).toThrow(NumberWithNonDigitCharactersError);
  });

  it("throws an error if string is written in scientific notation", () => {
    expect(() => validateStringNumber("10e3")).toThrow(NumberWithNonDigitCharactersError);
  });
});
