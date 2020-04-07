export class NumberIsTooSmallError extends Error {
  public static buildMessage(aNumber: number, lowerBound: number) {
    return `El número ${aNumber} debe ser mayor que ${lowerBound}`;
  }

  constructor(aNumber: number, lowerBound: number) {
    super(NumberIsTooSmallError.buildMessage(aNumber, lowerBound));
  }
}
