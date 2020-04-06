export class InvalidEmailError extends Error {
  public static buildMessage(email: string) {
    return `Email invalido ${email}`;
  }

  constructor(email: string) {
    super(InvalidEmailError.buildMessage(email));
  }
}
