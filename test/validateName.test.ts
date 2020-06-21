import { validateName } from "../src";
import { EmptyNameError, NameWithDigitsError } from "../src/Errors";

describe("validateName", () => {
  it("raise an error if name is empty", () => {
    expect(() => validateName("")).toThrow(EmptyNameError);
  });

  it("does not raise and error for long names", () => {
    const longName = "Devartissssssssssssssssssssssssssssssssss";
    expect(() => validateName(longName)).not.toThrow();
  });

  it("should raise and error if name has digits", () => {
    expect(() => validateName("Google34")).toThrow(NameWithDigitsError);
  });

  it("should not raise an error if name is valid", () => {
    expect(() => validateName("Devartis")).not.toThrow();
  });
});
