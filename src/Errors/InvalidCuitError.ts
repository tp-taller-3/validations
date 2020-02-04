export class InvalidCuitError extends Error {
  constructor() {
    super("Cuit has invalid format");
  }
}
