export class EmptyNameError extends Error {
  constructor() {
    super("El nombre no puede ser vacío");
  }
}
