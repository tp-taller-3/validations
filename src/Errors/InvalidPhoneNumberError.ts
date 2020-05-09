export class InvalidPhoneNumberError extends Error {
  public static buildMessage() {
    return "Número de telefono inválido. Ejemplos: 11 6029 2354, 11 4777 3424";
  }

  constructor() {
    super(InvalidPhoneNumberError.buildMessage());
  }
}
