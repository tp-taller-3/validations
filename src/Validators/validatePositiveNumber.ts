import { NegativeNumberError } from "../Errors";

const validatePositiveNumber = (someNumber: number) => {
  if (someNumber < 0) throw new NegativeNumberError(someNumber);

  return true;
};

export { validatePositiveNumber };
