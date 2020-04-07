import { NumberIsNaNError } from "../Errors";

const validateNumber = (aNumber: number) => {
  if (Number.isNaN(aNumber)) throw new NumberIsNaNError();

  return true;
};

export { validateNumber };
