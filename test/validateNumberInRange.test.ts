import { validateNumberInRange } from "../src";
import { NumberIsNaNError, NumberIsTooSmallError } from "../src/Errors";

describe("validateNumberInRange", () => {
  it("should raise an error if number is negative", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 0,
        include: false
      }
    })(-23)).toThrow(NumberIsTooSmallError)
  );

  it("should raise an error if number is NaN", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 0,
        include: false
      }
    })(NaN)).toThrow(NumberIsNaNError)
  );

  it("should not raise an error if number is bigger than zero", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 0,
        include: false
      }
    })(23)).not.toThrow()
  );

  it("should not raise an error if number is bigger than one hundred", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 100,
        include: false
      }
    })(200)).not.toThrow()
  );

  it("should raise an error if number is bigger than max", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 100,
        include: false
      },
      max: {
        value: 200,
        include: true
      }
    })(201)).toThrow("El número debe ser menor o igual a 200")
  );

  it("should not raise an error if number is equal to max and include is true", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 100,
        include: false
      },
      max: {
        value: 200,
        include: true
      }
    })(200)).not.toThrow()
  );

  it("ignores bound if its value is not set", () =>
    expect(() => validateNumberInRange({
      min: {
        value: 100,
        include: false
      },
      max: {
        include: true
      }
    })(200)).not.toThrow()
  );
});
