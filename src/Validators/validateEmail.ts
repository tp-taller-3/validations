import isEmail from "validator/lib/isEmail";
import { InvalidEmailError } from "../Errors";
import { validateStringSpaces } from "./validateStringSpaces";

const validateEmail = (email: string) => {
  validateStringSpaces(email);
  if (!isEmail(email)) throw new InvalidEmailError(email);
};

export { validateEmail };
