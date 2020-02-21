export class ShortPasswordError extends Error {
  public minLength: number;

  constructor(minLength: number) {
    super();
    this.minLength = minLength;
  }
}
