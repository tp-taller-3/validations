export class InvalidFiubaEmailError extends Error {
  public static buildMessage() {
    return `El email debe terminar en @fi.uba.ar`;
  }

  constructor() {
    super(InvalidFiubaEmailError.buildMessage());
  }
}
