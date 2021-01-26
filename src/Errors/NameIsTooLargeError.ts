export class NameIsTooLargeError extends Error {
  public static buildMessage(bound: number) {
    return `El nombre debe tener menos que ${bound} caracteres`;
  }

  constructor(bound: number) {
    super(NameIsTooLargeError.buildMessage(bound));
  }
}
