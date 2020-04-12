export class NumberIsTooSmallError extends Error {
  public static buildMessage(lowerBound: number, orEqual: boolean) {
    return `El número debe ser mayor${orEqual ? " o igual " : " "}a ${lowerBound}`;
  }

  constructor(lowerBound: number, orEqual: boolean) {
    super(NumberIsTooSmallError.buildMessage(lowerBound, orEqual));
  }
}
