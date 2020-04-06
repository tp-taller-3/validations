import { validateSalaryRange } from "../src";
import { SalaryRangeError } from "../src/Errors";

describe("validateSalaryRange", () => {
  it("should raise an error if minimumSalary is bigger than maximumSalary", () => {
    expect(() => validateSalaryRange(100, 50)).toThrow(SalaryRangeError);
  });

  it("should return true if minimumSalary is lower than maximumSalary", () => {
    expect(validateSalaryRange(100, 200)).toBeTruthy();
  });

  it("should return true if minimumSalary is equal to maximumSalary", () => {
    expect(validateSalaryRange(100, 100)).toBeTruthy();
  });
});
