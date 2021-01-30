import { StringWithSpacesError } from "../Errors";

export const validateStringSpaces = (value: string) => {
  if (/\s/.test(value)) throw new StringWithSpacesError();
};
