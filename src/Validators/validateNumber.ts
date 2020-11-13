import { NumberIsNaNError, NumberIsTooLargeError, NumberIsTooSmallError } from "../Errors";

const MAX_32_BIT_INTEGER = Math.pow(2, 32) / 2 - 1;

const validateNumber = (aNumber: number) => {
  if (Number.isNaN(aNumber)) throw new NumberIsNaNError();
  if (Math.abs(aNumber) > MAX_32_BIT_INTEGER) {
    throw new NumberIsTooLargeError(MAX_32_BIT_INTEGER, true);
  }
  if (Math.abs(aNumber) < -MAX_32_BIT_INTEGER) {
    throw new NumberIsTooSmallError(-MAX_32_BIT_INTEGER, true);
  }
};

export { validateNumber };
