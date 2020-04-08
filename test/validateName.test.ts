import { validateName } from "../src";
import { EmptyNameError, LongNameError, NameWithDigitsError } from "../src/Errors";

describe("validateName", () => {
  it("raise an error if name is empty", () => {
    expect(() => validateName("")).toThrow(EmptyNameError);
  });

  it("raise and error if name is over 35 characters", () => {
    const longName = "Devartissssssssssssssssssssssssssssssssss";
    expect(() => validateName(longName)).toThrow(LongNameError);
  });

  it("should raise and error if name has digits", () => {
    expect(() => validateName("Google34")).toThrow(NameWithDigitsError);
  });

  it("should not raise an error if name is valid", () => {
    expect(() => validateName("Devartis")).not.toThrow();
  });
});
