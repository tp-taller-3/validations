export class NameWithDigitsError extends Error {
  constructor() {
    super("El nombre no debe contener numeros");
  }
}
