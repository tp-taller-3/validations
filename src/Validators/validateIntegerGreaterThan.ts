import { validateInteger } from "../Validators";
import { NumberIsTooSmallError } from "../Errors";

const validateIntegerGreaterThan = (lowerBound: number) => {
  return (aNumber: number) => {
    validateInteger(aNumber);
    if (aNumber < lowerBound) throw new NumberIsTooSmallError(aNumber, lowerBound);
  };
};

export { validateIntegerGreaterThan };
