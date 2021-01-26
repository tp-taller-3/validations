import { EmptyNameError, NameWithDigitsError, NameIsTooLargeError } from "../Errors";

const validateName = name => {
  if (name.length === 0) throw new EmptyNameError();
  if (/\d/.test(name)) throw new NameWithDigitsError();
  if (name.length > 100) throw new NameIsTooLargeError(100);
};

export { validateName };
