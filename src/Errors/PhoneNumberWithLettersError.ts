export class PhoneNumberWithLettersError extends Error {
  public static buildMessage() {
    return `El fnúmero de teléfono no puede contener letras`;
  }

  constructor() {
    super(PhoneNumberWithLettersError.buildMessage());
  }
}
