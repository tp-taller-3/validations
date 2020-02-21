import * as EmailValidator from "email-validator";
import { InvalidEmailError } from "../Errors/InvalidEmailError";

const validateEmail = (email: string) => {
  if (!EmailValidator.validate(email)) throw new InvalidEmailError(email);
};

export { validateEmail };
