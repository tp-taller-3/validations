export class InvalidPhoneNumberError extends Error {
  public static buildMessage() {
    return "Número de telefono inválido. Ejemplo: 11 2939 0394";
  }

  constructor() {
    super(InvalidPhoneNumberError.buildMessage());
  }
}
