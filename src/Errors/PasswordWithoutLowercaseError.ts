export class PasswordWithoutLowercaseError extends Error {
  constructor() {
    super("La contraseña debe contener letras minúsculas");
  }
}
