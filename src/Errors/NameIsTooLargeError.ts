export class NameIsTooLargeError extends Error {
  public static buildMessage(bound: number) {
    return `Máximo ${bound} caracteres`;
  }

  constructor(bound: number) {
    super(NameIsTooLargeError.buildMessage(bound));
  }
}
