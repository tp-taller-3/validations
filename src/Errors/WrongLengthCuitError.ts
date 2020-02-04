export class WrongLengthCuitError extends Error {
  constructor() {
    super("Cuit should have eleven digits");
  }
}
