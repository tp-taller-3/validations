import { validateInteger, validateNumberInRange } from "../Validators";
import { IRange } from "./validateNumberInRange";

const validateIntegerInRange = (range: IRange) => {
  const rangeValidator = validateNumberInRange(range);
  return (aNumber: number) => {
    validateInteger(aNumber);
    rangeValidator(aNumber);
  };
};

export { validateIntegerInRange };
