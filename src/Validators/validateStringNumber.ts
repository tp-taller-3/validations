import { NumberWithNonDigitCharactersError } from "../Errors";

const validateStringNumber = (aNumber: string) => {
  if (!/^\d+$/.test(aNumber)) throw new NumberWithNonDigitCharactersError();
};

export { validateStringNumber };
