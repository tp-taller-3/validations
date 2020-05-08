export class WrongLengthCuitError extends Error {
  public static buildMessage() {
    return "El cuit debe tener once dígitos";
  }

  constructor() {
    super(WrongLengthCuitError.buildMessage());
  }
}
