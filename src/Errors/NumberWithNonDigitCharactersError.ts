export class NumberWithNonDigitCharactersError extends Error {
  public static buildMessage() {
    return "Debe contener dígitos";
  }

  constructor() {
    super(NumberWithNonDigitCharactersError.buildMessage());
  }
}
