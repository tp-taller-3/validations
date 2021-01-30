export class StringWithSpacesError extends Error {
  public static buildMessage() {
    return "No debe tener espacios";
  }

  constructor() {
    super(StringWithSpacesError.buildMessage());
  }
}
