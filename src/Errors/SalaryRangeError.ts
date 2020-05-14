export class SalaryRangeError extends Error {
  public static buildMessage() {
    return "El salario mínimo debe ser menor que el salario máximo";
  }

  constructor() {
    super(SalaryRangeError.buildMessage());
  }
}
