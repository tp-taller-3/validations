import { validateNumber } from "../Validators";
import { NumberIsTooSmallError } from "../Errors";

const validateNumberGreaterThan = (aNumber: number, lowerBound: number) => {
  validateNumber(aNumber);
  if (aNumber < lowerBound) throw new NumberIsTooSmallError(aNumber, lowerBound);

  return true;
};

export { validateNumberGreaterThan };
