export class NameWithDigitsError extends Error {
  public static buildMessage() {
    return "El nombre no debe contener números";
  }

  constructor() {
    super(NameWithDigitsError.buildMessage());
  }
}
