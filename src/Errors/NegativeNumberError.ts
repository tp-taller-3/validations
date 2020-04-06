export class NegativeNumberError extends Error {
  public static buildMessage(negativeNumber: number) {
    return `El numero ${negativeNumber} debe ser positivo`;
  }

  constructor(negativeNumber: number) {
    super(NegativeNumberError.buildMessage(negativeNumber));
  }
}
