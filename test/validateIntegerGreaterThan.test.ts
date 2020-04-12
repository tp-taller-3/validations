import { validateIntegerGreaterThan } from "../src";
import { NumberIsNaNError, NumberIsNotIntegerError, NumberIsTooSmallError } from "../src/Errors";

describe("validateIntegerGreaterThan", () => {
  it("should raise an error if number is negative", () =>
    expect(() => validateIntegerGreaterThan(0)(-23)).toThrow(NumberIsTooSmallError)
  );

  it("should raise an error if number is NaN", () =>
    expect(() => validateIntegerGreaterThan(0)(NaN)).toThrow(NumberIsNaNError)
  );

  it("should raise an error if number is not an integer", () =>
    expect(() => validateIntegerGreaterThan(0)(23.33)).toThrow(NumberIsNotIntegerError)
  );

  it("should not raise an error if number is bigger than zero", () =>
    expect(() => validateIntegerGreaterThan(0)(23)).not.toThrow()
  );

  it("should not raise an error if number is bigger than one hundred", () =>
    expect(() => validateIntegerGreaterThan(100)(200)).not.toThrow()
  );

  it("should raise an error if number is equal", () =>
    expect(() => validateIntegerGreaterThan(100)(100)).toThrow(
      "El número 100 debe ser mayor a 100"
    )
  );

  it("should not raise an error if number is equal and orEqual is true", () =>
    expect(() => validateIntegerGreaterThan(100, { orEqual: true })(100)).not.toThrow()
  );

  it("should otherwise have the same behaviour if orEqual is true", () =>
    expect(() => validateIntegerGreaterThan(100, { orEqual: true })(99)).toThrow(
      "El número 99 debe ser mayor o igual a 100"
    )
  );
});
