import { EmptyNameError, NameWithDigitsError, NameWithMultipleSpaces } from "../Errors";
import { validateStringLength } from "./validateStringLength";

const validateName = (name: string) => {
  if (name.length === 0) throw new EmptyNameError();
  if (/\d/.test(name)) throw new NameWithDigitsError();
  if (/\s\s+/g.test(name)) throw new NameWithMultipleSpaces();
  validateStringLength(name);
};

export { validateName };
