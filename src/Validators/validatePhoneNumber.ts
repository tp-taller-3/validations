import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";
import { InvalidPhoneNumberError } from "../Errors";

interface IValidatePhoneNumberArguments {
  phoneNumber: string;
  countryCode?: CountryCode;
}

export const validatePhoneNumber = (
  { phoneNumber,
    countryCode = "AR"
  }: IValidatePhoneNumberArguments
) => {
  const parsedPhoneNumber = parsePhoneNumberFromString(
    phoneNumber,
    { defaultCountry: countryCode }
  );
  if (parsedPhoneNumber && parsedPhoneNumber.isPossible() && parsedPhoneNumber.isValid()) return;
  throw new InvalidPhoneNumberError(phoneNumber);
};
