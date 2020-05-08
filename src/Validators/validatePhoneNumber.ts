import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";
import { InvalidPhoneNumberError, PhoneNumberWithLettersError } from "../Errors";

interface IValidatePhoneNumberArguments {
  phoneNumber: string;
  countryCode?: CountryCode;
}

const validatePhoneNumberWithCountryCode = (
  {
    phoneNumber,
    countryCode
  }: IValidatePhoneNumberArguments) => {
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
  if (parsedPhoneNumber && parsedPhoneNumber.isPossible() && parsedPhoneNumber.isValid()) return;
  throw new InvalidPhoneNumberError();
};

const validatePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.match(/[a-z]/i)) throw new PhoneNumberWithLettersError();

  try {
    validatePhoneNumberWithCountryCode({ phoneNumber });
  } catch (error) {
    validatePhoneNumberWithCountryCode({ phoneNumber, countryCode: "AR" });
  }
};

export { validatePhoneNumber };
