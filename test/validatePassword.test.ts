import {
  LongPasswordError, PasswordWithoutDigitsError,
  PasswordWithoutLowercaseError,
  PasswordWithoutUppercaseError,
  ShortPasswordError
} from "../src/Errors";
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

  it("errors on long passwords", () => {
    let error;
    try {
      validatePassword(
        "Ab1javifogijrejgioewmorj3oj29ru32ue9021uefnwinfio4" +
        "Ab1javifogijrejgioewmorj3oj29ru32ue9021uefnwinfio44"
      );
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(LongPasswordError);
    expect(error.maxLength).toEqual(100);
  });

  it("errors on passwords without uppercase characters", () => {
    expect(() =>
      validatePassword("averysecretpass95")
    ).toThrow(PasswordWithoutUppercaseError);
  });

  it("errors on passwords without lowercase characters", () => {
    expect(() =>
      validatePassword("AVERYSECRETPASS95")
    ).toThrow(PasswordWithoutLowercaseError);
  });

  it("errors on passwords without digits", () => {
    expect(() => validatePassword("DylanAlvarez")).toThrow(PasswordWithoutDigitsError);
  });
});
