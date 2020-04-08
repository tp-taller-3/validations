import { validateSalaryRange } from "../src";
import { SalaryRangeError } from "../src/Errors";

describe("validateSalaryRange", () => {
  it("should raise an error if minimumSalary is bigger than maximumSalary", () => {
    expect(() => validateSalaryRange(100, 50)).toThrow(SalaryRangeError);
  });

  it("should not raise an error if minimumSalary is lower than maximumSalary", () => {
    expect(() => validateSalaryRange(100, 200)).not.toThrow();
  });

  it("should not raise an error if minimumSalary is equal to maximumSalary", () => {
    expect(() => validateSalaryRange(100, 100)).not.toThrow();
  });
});
