export class InvalidCuitError extends Error {
  public static buildMessage() {
    return "CUIT inválido. Ejemplo: 30711819017";
  }

  constructor() {
    super(InvalidCuitError.buildMessage());
  }
}
