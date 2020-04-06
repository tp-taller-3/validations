export class NegativeNumberError extends Error {
  constructor(negativeNumber: number) {
    super(`El numero ${negativeNumber} debe ser positivo`);
  }
}
