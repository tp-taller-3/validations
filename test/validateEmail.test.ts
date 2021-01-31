import { validateEmail } from "../src";
import { InvalidEmailError, StringWithSpacesError } from "../src/Errors";

describe("validateEmail", () => {
  it("passes on valid emails", () => {
    expect(() => validateEmail("asd@gmail.com")).not.toThrow(InvalidEmailError);
  });

  it("allows emails with a plus sign", () => {
    expect(() => validateEmail("asd+qwe@gmail.com")).not.toThrow(InvalidEmailError);
  });

  it("throw an error on empty strings", () => {
    expect(() => validateEmail("asd@gmail.com ")).toThrow(StringWithSpacesError);
  });

  it("throw an error on email with spaces", () => {
    expect(() => validateEmail("")).toThrow(InvalidEmailError);
  });

  it("throw an error on strings without an @ sign", () => {
    expect(() => validateEmail("asd.com")).toThrow(InvalidEmailError);
  });

  it("throw an error on strings without a dot", () => {
    expect(() => validateEmail("asd@gmail")).toThrow(InvalidEmailError);
  });
});
