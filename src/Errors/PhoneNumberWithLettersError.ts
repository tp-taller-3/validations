export class PhoneNumberWithLettersError extends Error {
  public static buildMessage() {
    return `El número de teléfono no puede contener letras`;
  }

  constructor() {
    super(PhoneNumberWithLettersError.buildMessage());
  }
}
