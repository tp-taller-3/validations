import { SalaryRangeError } from "../Errors";

const validateSalaryRange = (minimumSalary: number, maximumSalary: number) => {
  if (minimumSalary > maximumSalary) throw new SalaryRangeError();

  return true;
};

export { validateSalaryRange };
