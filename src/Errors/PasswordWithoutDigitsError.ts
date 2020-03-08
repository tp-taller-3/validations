export class PasswordWithoutDigitsError extends Error {
  constructor() {
    super("La contraseña debe contener numeros");
  }
}
