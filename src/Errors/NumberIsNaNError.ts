export class NumberIsNaNError extends Error {
  public static buildMessage() {
    return "Debe ser un número";
  }

  constructor() {
    super(NumberIsNaNError.buildMessage());
  }
}
