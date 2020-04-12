import isEmail from "validator/lib/isEmail";
import { InvalidEmailError } from "../Errors";

const validateEmail = (email: string) => {
  if (!isEmail(email)) throw new InvalidEmailError(email);
};

export { validateEmail };
