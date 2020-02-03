import { EmptyNameError, LongNameError } from "./Errors";

const validateName = name => {
  if (name.length === 0) throw new EmptyNameError();
  if (name.length >= 35) throw new LongNameError();
  return true;
};

export { validateName };
