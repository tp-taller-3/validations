import { validateNumber } from "../Validators";
import { NumberIsTooSmallError } from "../Errors";

const validateNumberGreaterThan = (lowerBound: number) => {
  return (aNumber: number) => {
    validateNumber(aNumber);
    if (aNumber < lowerBound) throw new NumberIsTooSmallError(aNumber, lowerBound);
  };
};

export { validateNumberGreaterThan };
