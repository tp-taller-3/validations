export class NumberIsNotIntegerError extends Error {
  public static buildMessage() {
    return "El número debe ser entero";
  }

  constructor() {
    super(NumberIsNotIntegerError.buildMessage());
  }
}
