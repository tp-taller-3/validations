export class PasswordWithoutUppercaseError extends Error {
  constructor() {
    super("La contraseña debe contener letras mayúsculas");
  }
}
