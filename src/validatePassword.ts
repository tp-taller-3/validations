import PasswordValidator from "password-validator";
import { LongPasswordError, ShortPasswordError } from "./Errors";

const minLength = 10;
const maxLength = 100;

const schema = new PasswordValidator()
  .is().min(minLength)
  .is().max(maxLength)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().not().spaces();

const validatePassword = (password: string) => {
  const failedRules = schema.validate(password, { list: true }) as string[];

  if (failedRules.includes("min")) throw new ShortPasswordError(minLength);
  if (failedRules.includes("max")) throw new LongPasswordError(maxLength);
};

export { validatePassword };
