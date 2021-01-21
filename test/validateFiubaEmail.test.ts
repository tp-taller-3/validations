import { validateFiubaEmail } from "../src";
import { InvalidEmailError, InvalidFiubaEmailError } from "../src/Errors";

describe("validateFiubaEmail", () => {
  it("throws an error on empty strings", () => {
    expect(() => validateFiubaEmail("")).toThrow(InvalidEmailError);
  });

  it("throws an error on strings without an @ sign", () => {
    expect(() => validateFiubaEmail("asd.com")).toThrow(InvalidEmailError);
  });

  it("throws an error on strings without a dot", () => {
    expect(() => validateFiubaEmail("asd@gmail")).toThrow(InvalidEmailError);
  });

  it("throws an error if the domain is not from fiuba", () => {
    expect(() => validateFiubaEmail("asd@gmail.com")).toThrow(InvalidFiubaEmailError);
  });

  it("throws an error if the domain is from fiuba but it is incomplete", () => {
    expect(() => validateFiubaEmail("asd@fi.uba")).toThrow(InvalidFiubaEmailError);
  });

  it("does not throw error if the emails has a valid domain", () => {
    expect(() => validateFiubaEmail("asd@fi.uba.ar")).not.toThrowError();
  });

  it("allows emails with a plus sign", () => {
    expect(() => validateFiubaEmail("asd+qwe@fi.uba.ar")).not.toThrow();
  });
});
