export class InvalidCuitError extends Error {
  public static buildMessage() {
    return "Cuit con formato incorrecto";
  }

  constructor() {
    super(InvalidCuitError.buildMessage());
  }
}
