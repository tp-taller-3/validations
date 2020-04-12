export class NumberIsTooSmallError extends Error {
  public static buildMessage(aNumber: number, lowerBound: number, orEqual?: boolean) {
    return `El número ${aNumber} debe ser mayor${orEqual ? " o igual " : " "}a ${lowerBound}`;
  }

  constructor(aNumber: number, lowerBound: number, orEqual?: boolean) {
    super(NumberIsTooSmallError.buildMessage(aNumber, lowerBound, orEqual));
  }
}
