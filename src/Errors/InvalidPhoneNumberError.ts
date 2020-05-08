export class InvalidPhoneNumberError extends Error {
  public static buildMessage(phoneNumber: string) {
    return `El formato del número de teléfono: ${phoneNumber} es inválido`;
  }

  constructor(phoneNumber: string) {
    super(InvalidPhoneNumberError.buildMessage(phoneNumber));
  }
}
