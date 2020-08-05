import { InvalidDniError } from "../Errors";

export const validateDni = (dni: number) => {
  const DNI_REGEX = /^\d{8}(?:[-\s]\d{4})?$/;
  if (!DNI_REGEX.test(dni.toString())) throw new InvalidDniError(dni);
};
