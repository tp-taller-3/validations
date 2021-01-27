import { EmptyNameError, NameWithDigitsError } from "../Errors";
import { validateStringLength } from "./validateStringLength";

const validateName = name => {
  if (name.length === 0) throw new EmptyNameError();
  if (/\d/.test(name)) throw new NameWithDigitsError();
  validateStringLength(name);
};

export { validateName };
