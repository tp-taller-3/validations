import { validateCuit } from "../src";
import { WrongLengthCuitError, InvalidCuitError } from "../src/Errors";

describe("validateCuit", () => {
  it("returns true if cuit is valid", () => {
    expect(validateCuit("30711819017")).toBeTruthy();
  });

  it("throws an error if cuit has less than eleven digits", () => {
    expect(() => validateCuit("23")).toThrow(WrongLengthCuitError);
  });

  it("throws an error if cuit has characters that are not digits", () => {
    expect(() => validateCuit("30-71181901-7")).toThrow(InvalidCuitError);
  });

  it("throws an error if cuit first two digits is a non existent type person", () => {
    const typePerson: string = "01";
    const dni: string = "39207882";
    const verificationCode: string = "7";
    const cuit: string = `${typePerson}${dni}${verificationCode}`;
    expect(() => validateCuit(cuit)).toThrow(InvalidCuitError);
  });

  it("throws an error if cuit is null", () => {
    expect(() => validateCuit(null)).toThrow(InvalidCuitError);
  });
});
