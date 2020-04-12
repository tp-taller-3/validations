import { validateInteger } from "../Validators";
import { NumberIsTooSmallError } from "../Errors";

const validateIntegerGreaterThan = (lowerBound: number, options?: { orEqual?: boolean }) => (
  (aNumber: number) => {
    validateInteger(aNumber);
    const isValid = aNumber > lowerBound || (options?.orEqual && aNumber === lowerBound);
    if (!isValid) throw new NumberIsTooSmallError(aNumber, lowerBound, options?.orEqual);
  }
);

export { validateIntegerGreaterThan };
