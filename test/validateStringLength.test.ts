import { validateStringLength } from "../src";
import { StringIsTooLargeError } from "../src/Errors";

describe("validateStringLength", () => {
  it("does not throw an error if the string has less than a hundred characters", () => {
    expect(() => validateStringLength("Devartis")).not.toThrow();
  });

  it("throws and error if the string has more than a hundred caracteres", () => {
    expect(() => validateStringLength("g".repeat(101))).toThrow(StringIsTooLargeError);
  });
});
