export class LongNameError extends Error {
  public static maximumNameLength: number = 35;

  constructor() {
    super(`Name should have less than ${LongNameError.maximumNameLength} characters`);
  }

}
