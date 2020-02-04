export class NameWithDigitsError extends Error {
  public static message: string = "name should not have digits";

  constructor() {
    super(NameWithDigitsError.message);
  }

}
