import { validateName } from "../src";
import { EmptyNameError, LongNameError } from "../src/Errors";

describe("nameValidator", () => {
  it("raise an error if name is empty", () => {
    expect(() => validateName("")).toThrow(EmptyNameError);
  });

  it("raise and error if name is over 35 characters", () => {
    const longName = "Devartissssssssssssssssssssssssssssssssss";
    expect(() => validateName(longName)).toThrow(LongNameError);
  });

  it("returns true if name is valid", () => {
    expect(validateName("Devartis")).toBeTruthy();
  });
});
