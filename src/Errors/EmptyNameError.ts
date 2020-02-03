export class EmptyNameError extends Error {
  public static message: string = "name has no length";

  constructor() {
    super(EmptyNameError.message);
  }

}
