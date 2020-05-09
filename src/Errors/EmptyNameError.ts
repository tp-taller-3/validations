export class EmptyNameError extends Error {
  public static buildMessage() {
    return "El nombre no puede ser vacío";
  }

  constructor() {
    super(EmptyNameError.buildMessage());
  }
}
