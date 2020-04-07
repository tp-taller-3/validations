import { validateInteger } from "../Validators";
import { NumberIsTooSmallError } from "../Errors";

const validateIntegerGreaterThan = (aNumber: number, lowerBound: number) => {
  validateInteger(aNumber);
  if (aNumber < lowerBound) throw new NumberIsTooSmallError(aNumber, lowerBound);
};

export { validateIntegerGreaterThan };
