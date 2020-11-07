import { WrongLengthCuitError, InvalidCuitError } from "../Errors";

const validateCuit = (cuit: string) => {
  if (!cuit) throw new InvalidCuitError();
  if (cuit.length !== 11) throw new WrongLengthCuitError();

  const multipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const parsedCuit: number[] = cuit.split("").map(n => Number(n));
  const verificationCode: number = parsedCuit[10];
  let result = 0;
  for(let i = 0; i <= 9; i++) result += parsedCuit[i] * multipliers[i];
  result = 11 - (result % 11);
  if (result === 11) result = 0;
  if (result === 10) result = 9;
  if (result === verificationCode) return true;
  throw new InvalidCuitError();
};

export { validateCuit };
