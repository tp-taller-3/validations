import { StringIsTooLargeError } from "../Errors";

export const validateStringLength = (value: string) => {
  if (value.length > 100) throw new StringIsTooLargeError(100);
};
