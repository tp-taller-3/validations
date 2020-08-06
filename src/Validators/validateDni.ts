import { InvalidDniError, DniIsUndefinedError } from "../Errors";

export const validateDni = (dni: number) => {
  if (!dni) throw new DniIsUndefinedError();

  const DNI_REGEX = /^\d{8}(?:[-\s]\d{4})?$/;
  if (!DNI_REGEX.test(dni.toString())) throw new InvalidDniError(dni);
};
