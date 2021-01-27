import { NameIsTooLargeError } from "../Errors";

export const validateStringLength = (value: string) => {
  if (value.length > 100) throw new NameIsTooLargeError(100);
};
