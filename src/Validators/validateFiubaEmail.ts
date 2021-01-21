import { InvalidFiubaEmailError } from "../Errors";
import { validateEmail } from "./validateEmail";

const validateFiubaEmail = (email: string) => {
  validateEmail(email);
  const domain = email.split("@")[1];
  if (domain !== "fi.uba.ar") throw new InvalidFiubaEmailError();
};

export { validateFiubaEmail };
