export class LongPasswordError extends Error {
  public maxLength: number;

  constructor(maxLength: number) {
    super("La contraseña debe ser menor a 100 caracteres");
    this.maxLength = maxLength;
  }
}
