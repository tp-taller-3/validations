import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";
import { InvalidPhoneNumberError, PhoneNumberWithLettersError } from "../Errors";

interface IValidatePhoneNumberArguments {
  phoneNumber: string;
  countryCode?: CountryCode;
}

const validatePhoneNumber = (
  { phoneNumber,
    countryCode = "AR"
  }: IValidatePhoneNumberArguments
) => {
  if (phoneNumber.match(/[a-z]/i)) throw new PhoneNumberWithLettersError();

  const parsedPhoneNumber = parsePhoneNumberFromString(
    phoneNumber,
    { defaultCountry: countryCode }
  );
  if (parsedPhoneNumber && parsedPhoneNumber.isPossible() && parsedPhoneNumber.isValid()) return;
  throw new InvalidPhoneNumberError();
};

export { validatePhoneNumber };
