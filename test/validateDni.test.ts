import { validateDni } from "../src";
import { InvalidDniError } from "../src/Errors";

describe("validateDni", () => {
  it("raises an error if dni has less than nine digits", () => {
    expect(() => validateDni(11)).toThrow(InvalidDniError);
  });

  it("does not raise an error if the dni has nine digits", () => {
    expect(() => validateDni(39207888)).not.toThrow();
  });
});
