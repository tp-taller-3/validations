import { ShortPasswordError } from "../src/Errors";
import { validatePassword } from "../src";

describe("validatePassword", () => {
  it("errors on short passwords", () => {
    let error;
    try {
      validatePassword("Ab1");
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(ShortPasswordError);
    expect(error.minLength).toEqual(10);
  });
});
