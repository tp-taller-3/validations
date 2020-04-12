import { validateIntegerInRange } from "../src";
import { NumberIsNaNError, NumberIsNotIntegerError, NumberIsTooSmallError } from "../src/Errors";

describe("validateIntegerInRange", () => {
  it("should raise an error if number is negative", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 0,
        include: false
      }
    })(-23)).toThrow(NumberIsTooSmallError)
  );

  it("should raise an error if number is NaN", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 0,
        include: false
      }
    })(NaN)).toThrow(NumberIsNaNError)
  );

  it("should raise an error if number is not an integer", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 0,
        include: false
      }
    })(23.33)).toThrow(NumberIsNotIntegerError)
  );

  it("should not raise an error if number is bigger than zero", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 0,
        include: false
      }
    })(23)).not.toThrow()
  );

  it("should raise an error if number is equal to max and include is false", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 0,
        include: false
      },
      max: {
        value: 23,
        include: false
      }
    })(23)).toThrow("El número debe ser menor a 23")
  );

  it("should not raise an error if number is bigger than one hundred", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 100,
        include: false
      }
    })(200)).not.toThrow()
  );

  it("should raise an error if number is equal", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 100,
        include: false
      }
    })(100)).toThrow(
      "El número debe ser mayor a 100"
    )
  );

  it("should not raise an error if number is equal and orEqual is true", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 100,
        include: true
      }
    })(100)).not.toThrow()
  );

  it("should otherwise have the same behaviour if orEqual is true", () =>
    expect(() => validateIntegerInRange({
      min: {
        value: 100,
        include: true
      }
    })(99)).toThrow(
      "El número debe ser mayor o igual a 100"
    )
  );

  describe("max and min are equal", () => {
    it("allows that value if both includes are true", () =>
      expect(() => validateIntegerInRange({
        min: {
          value: 100,
          include: true
        },
        max: {
          value: 100,
          include: true
        }
      })(100)).not.toThrow()
    );

    it("does not allow that value if max's include is false", () =>
      expect(() => validateIntegerInRange({
        min: {
          value: 100,
          include: true
        },
        max: {
          value: 100,
          include: false
        }
      })(100)).toThrow(
        "El número debe ser menor a 100"
      )
    );

    it("does not allow that value if min's include is false", () =>
      expect(() => validateIntegerInRange({
        min: {
          value: 100,
          include: false
        },
        max: {
          value: 100,
          include: true
        }
      })(100)).toThrow("El número debe ser mayor a 100")
    );

    it("does not allow any value if both includes are false", () =>
      expect(() => validateIntegerInRange({
        min: {
          value: 100,
          include: false
        },
        max: {
          value: 100,
          include: false
        }
      })(100)).toThrow(
        "El número debe ser mayor a 100"
      )
    );
  });
});
