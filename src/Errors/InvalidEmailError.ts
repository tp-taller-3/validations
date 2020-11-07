export class InvalidEmailError extends Error {
  public static buildMessage(email: string) {
    return `Email inválido ${email}`;
  }

  constructor(email: string) {
    super(InvalidEmailError.buildMessage(email));
  }
}
