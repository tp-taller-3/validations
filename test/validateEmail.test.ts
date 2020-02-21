import { validateEmail } from "../src";
import { InvalidEmailError } from "../src/Errors";

describe("validateEmail", () => {
  it("errors on empty strings", () => {
    expect(() => validateEmail("")).toThrow(InvalidEmailError);
  });

  it("errors on strings without an @ sign", () => {
    expect(() => validateEmail("asd.com")).toThrow(InvalidEmailError);
  });

  it("errors on strings without a dot", () => {
    expect(() => validateEmail("asd@gmail")).toThrow(InvalidEmailError);
  });

  it("passes on valid emails", () => {
    expect(() => validateEmail("asd@gmail.com")).not.toThrow(InvalidEmailError);
  });

  it("allows emails with a plus sign", () => {
    expect(() => validateEmail("asd+qwe@gmail.com")).not.toThrow(InvalidEmailError);
  });
});
