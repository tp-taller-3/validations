import { EmptyNameError, LongNameError, NameWithDigitsError } from "../Errors";

const validateName = name => {
  if (name.length === 0) throw new EmptyNameError();
  if (name.length >= LongNameError.maximumNameLength) throw new LongNameError();
  if (/\d/.test(name)) throw new NameWithDigitsError();
  return true;
};

export { validateName };
