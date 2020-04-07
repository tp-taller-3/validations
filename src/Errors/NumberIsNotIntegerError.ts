export class NumberIsNotIntegerError extends Error {
  public static buildMessage(aNumber: number) {
    return `El número: ${aNumber} no es un entero`;
  }

  constructor(aNumber: number) {
    super(NumberIsNotIntegerError.buildMessage(aNumber));
  }
}
