export class InvalidCuitError extends Error {
  constructor() {
    super("Cuit con formato incorrecto");
  }
}
