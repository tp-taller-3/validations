export class ShortPasswordError extends Error {
  public minLength: number;

  constructor(minLength: number) {
    super("La contraseña debe tener al menos 10 caracteres");
    this.minLength = minLength;
  }
}
