import { validateStringSpaces } from "../src";
import { StringWithSpacesError } from "../src/Errors";

describe("validateStringSpaces", () => {
  it("throws an error if the string has one space", () => {
    expect(() => validateStringSpaces(" Devartis")).toThrow(StringWithSpacesError);
  });

  it("throws an error if the string has more than one space", () => {
    expect(() => validateStringSpaces("        Devartis")).toThrow(StringWithSpacesError);
  });

  it("throws an error if the string spaces in between", () => {
    expect(() => validateStringSpaces("Dev  artis")).toThrow(StringWithSpacesError);
  });

  it("throws an error if the string spaces new lines", () => {
    expect(() => validateStringSpaces("Dev  \n artis")).toThrow(StringWithSpacesError);
  });

  it("does not throw and error if the string has more than a hundred caracteres", () => {
    expect(() => validateStringSpaces("Devartis")).not.toThrow();
  });
});
