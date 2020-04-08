export class SalaryRangeError extends Error {
  public static buildMessage() {
    return "El salario minimo debe ser menor que el salario maximo";
  }

  constructor() {
    super(SalaryRangeError.buildMessage());
  }
}
