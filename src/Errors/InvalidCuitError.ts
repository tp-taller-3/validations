export class InvalidCuitError extends Error {
  public static message: string = "cuit has invalid format";

  constructor() {
    super(InvalidCuitError.message);
  }

}
