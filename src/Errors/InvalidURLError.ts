export class InvalidURLError extends Error {
  constructor() {
    super("La URL es inválida");
  }
}
