export class LongNameError extends Error {
  public static message: string = "name should have less than 35 characters";

  constructor() {
    super(LongNameError.message);
  }

}
