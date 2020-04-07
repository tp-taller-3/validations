export class NumberIsNaNError extends Error {
  public static buildMessage() {
    return "El número no debe ser NaN";
  }

  constructor() {
    super(NumberIsNaNError.buildMessage());
  }
}
