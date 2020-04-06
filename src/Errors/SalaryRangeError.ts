export class SalaryRangeError extends Error {
  constructor() {
    super("El salario minimo debe ser menor que el salario maximo");
  }
}
