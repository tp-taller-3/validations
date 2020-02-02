import { validateCuit } from "../src";
import { WrongLengthCuitError, InvalidCuitError } from "../src/Errors";

describe("cuitValidator", () => {
  it("raise an error if cuit has less than eleven digits", () => {
    expect(() => validateCuit("23")).toThrow(WrongLengthCuitError);
  });

  it("returns true if cuit is valid", () => {
    expect(validateCuit("30711819017")).toBeTruthy();
  });

  it("raise an error if cuit first two digits is a non existent type person", () => {
    const typePerson: string =  "01";
    const dni: string = "39207882";
    const verificationCode: string = "7";
    const cuit: string = `${typePerson}${dni}${verificationCode}`;
    expect(() => validateCuit(cuit)).toThrow(InvalidCuitError);
  });
});
