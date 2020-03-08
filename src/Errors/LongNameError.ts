export class LongNameError extends Error {
  public static maximumNameLength: number = 35;

  constructor() {
    super(`El nombre debe tener menos de ${LongNameError.maximumNameLength} letras`);
  }

}
