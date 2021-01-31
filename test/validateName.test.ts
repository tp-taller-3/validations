import { validateName } from "../src";
import {
  EmptyNameError,
  NameWithDigitsError,
  StringIsTooLargeError,
  NameWithMultipleSpaces
} from "../src/Errors";

describe("validateName", () => {
  it("does not throw an error if name is valid", () => {
    expect(() => validateName("Devartis")).not.toThrow();
  });

  it("allows at least one space", () => {
    expect(() => validateName("Devartis ")).not.toThrow();
  });

  it("does not throw and error for long names that have less than 100 caracteres", () => {
    const longName = "D".repeat(99);
    expect(() => validateName(longName)).not.toThrow();
  });

  it("does not throw and error for a name with a 100 caracteres", () => {
    const longName = "D".repeat(100);
    expect(() => validateName(longName)).not.toThrow();
  });

  it("throws an error if name is empty", () => {
    expect(() => validateName("")).toThrow(EmptyNameError);
  });

  it("throws an error if name has multiple spaces", () => {
    expect(() => validateName("Devartis  SA")).toThrow(NameWithMultipleSpaces);
  });

  it("throws an error if name has multilines", () => {
    const name = "\
      this\
      is a multi\
      line\
      string\
    ";
    expect(() => validateName(name)).toThrow(NameWithMultipleSpaces);
  });

  it("throws an error if name has a newline character", () => {
    expect(() => validateName("Devartis\nSA")).toThrow(NameWithMultipleSpaces);
  });

  it("throws and error if name has digits", () => {
    expect(() => validateName("Google34")).toThrow(NameWithDigitsError);
  });

  it("throws and error if name has more than a hundred caracteres", () => {
    expect(() => validateName("g".repeat(101))).toThrow(StringIsTooLargeError);
  });
});
