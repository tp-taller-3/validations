import { validateDni } from "../src";
import { InvalidDniError } from "../src/Errors";

describe("validateDni", () => {
  const expectToThrowErrorWithDni = (dni: number) => {
    const matcher = expect(() => validateDni(dni));
    matcher.toThrow(InvalidDniError);
    matcher.toThrow(InvalidDniError.buildMessage(dni));
  };

  it("does not throw an error if the dni has nine digits", () => {
    expect(() => validateDni(39207888)).not.toThrow();
  });

  it("does not throw an error if dni is undefined", () => {
    expect(() => validateDni(undefined)).not.toThrow();
  });


  it("throws an error if dni has less than nine digits", () => {
    expectToThrowErrorWithDni(11);
  });

  it("throws an error if dni has mote than nine digits", () => {
    expectToThrowErrorWithDni(1111111111);
  });

  it("throws an error if dni is negative", () => {
    expectToThrowErrorWithDni(-39207999);
  });
});
