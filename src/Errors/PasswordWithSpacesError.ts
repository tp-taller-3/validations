export class PasswordWithSpacesError extends Error {
  constructor() {
    super("La contraseña no debe contener espacios");
  }
}
