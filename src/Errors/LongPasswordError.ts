export class LongPasswordError extends Error {
  public maxLength: number;

  constructor(maxLength: number) {
    super();
    this.maxLength = maxLength;
  }
}
