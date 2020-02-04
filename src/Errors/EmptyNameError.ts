export class EmptyNameError extends Error {
  constructor() {
    super("Field can't be empty");
  }
}
