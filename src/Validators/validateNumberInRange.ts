import { validateNumber } from "../Validators";
import { NumberIsTooLargeError, NumberIsTooSmallError } from "../Errors";

const validateNumberGreaterThan = (min: IRangeBound, aNumber: number) => {
  if (min.value === undefined) return;
  const isValid = min.include ? aNumber >= min.value : aNumber > min.value;
  if (isValid) return;
  throw new NumberIsTooSmallError(min.value, min.include);
};

const validateNumberSmallerThan = (max: IRangeBound, aNumber: number) => {
  if (max.value === undefined) return;
  const isValid = max.include ? aNumber <= max.value : aNumber < max.value;
  if (!isValid) throw new NumberIsTooLargeError(max.value, max.include);
};

const validateNumberInRange = ({ min, max }: IRange) => {
  return (aNumber: number) => {
    validateNumber(aNumber);
    if (min) validateNumberGreaterThan(min, aNumber);
    if (max) validateNumberSmallerThan(max, aNumber);
  };
};

export interface IRange {
  min?: IRangeBound;
  max?: IRangeBound;
}

interface IRangeBound {
  value?: number;
  include: boolean;
}

export { validateNumberInRange };
