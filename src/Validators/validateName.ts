import { EmptyNameError, NameWithDigitsError } from "../Errors";

const validateName = name => {
  if (name.length === 0) throw new EmptyNameError();
  if (/\d/.test(name)) throw new NameWithDigitsError();
};

export { validateName };
