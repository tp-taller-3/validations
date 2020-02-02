export class WrongLengthCuitError extends Error {
  public static message: string = "cuit should have eleven digits";

  constructor() {
    super(WrongLengthCuitError.message);
  }

}
