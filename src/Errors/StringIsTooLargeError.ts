export class StringIsTooLargeError extends Error {
  public static buildMessage(bound: number) {
    return `Máximo ${bound} caracteres`;
  }

  constructor(bound: number) {
    super(StringIsTooLargeError.buildMessage(bound));
  }
}
