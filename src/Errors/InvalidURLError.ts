export class InvalidURLError extends Error {
  public static buildMessage() {
    return "La URL es inválida";
  }

  constructor() {
    super(InvalidURLError.buildMessage());
  }
}
