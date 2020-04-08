import { validateNumber } from "../Validators";
import { NumberIsNotIntegerError } from "../Errors";

const validateInteger = (aNumber: number) => {
  validateNumber(aNumber);
  if (!Number.isInteger(aNumber)) throw new NumberIsNotIntegerError(aNumber);
};

export { validateInteger };
