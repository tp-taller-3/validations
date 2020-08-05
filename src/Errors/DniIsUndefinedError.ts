export class DniIsUndefinedError extends Error {
  public static buildMessage() {
    return `El DNI no puede ser indefinido`;
  }

  constructor() {
    super(DniIsUndefinedError.buildMessage());
  }
}
