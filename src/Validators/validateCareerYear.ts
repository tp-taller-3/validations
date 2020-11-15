import { validateIntegerInRange } from "./validateIntegerInRange";

export const validateCareerYear = () =>
  validateIntegerInRange({min: {value: 1, include: true}, max: {value: 5, include: true}});
