export class NameWithDigitsError extends Error {
  constructor() {
    super("Name should not have digits");
  }
}
