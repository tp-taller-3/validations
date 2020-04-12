import isURL from "validator/lib/isURL";
import { InvalidURLError } from "../Errors";

const validateURL = (url: string) => {
  if (!isURL(url)) throw new InvalidURLError();
};

export { validateURL };
