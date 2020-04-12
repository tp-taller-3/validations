export class NumberIsTooLargeError extends Error {
  public static buildMessage(lowerBound: number, orEqual: boolean) {
    return `El número debe ser menor${orEqual ? " o igual " : " "}a ${lowerBound}`;
  }

  constructor(lowerBound: number, orEqual: boolean) {
    super(NumberIsTooLargeError.buildMessage(lowerBound, orEqual));
  }
}
