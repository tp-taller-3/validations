import { validatePhoneNumber } from "../src";
import { InvalidPhoneNumberError, PhoneNumberWithLettersError } from "../src";

describe("validatePhoneNumber", () => {
  it("does not throw an error on cell phone number", () => {
    expect(() => validatePhoneNumber("1159871234")).not.toThrow();
  });

  it("does not throw an error on number with country code", () => {
    expect(() => validatePhoneNumber("541159871234")).not.toThrow();
  });

  it("does not throw an error on number with country code and plus symbol", () => {
    expect(() => validatePhoneNumber("+541159871234")).not.toThrow();
  });

  it("does not throw an error on number with hyphen separator", () => {
    expect(() => validatePhoneNumber("+5411-5-987-1234")).not.toThrow();
  });

  it("does not throw an error on number with area code between brackets", () => {
    expect(() => validatePhoneNumber("+54 (011) 5-987-1234")).not.toThrow();
  });

  it("does not throw an error on a telephone number with area code", () => {
    expect(() => validatePhoneNumber("1143075222" )).not.toThrow();
  });

  it("does not throw an error on valid formats for argentinian landlines", () => {
    [
      "(011) 40393692",
      "(011) 4039 3692",
      "(011) 4039-3692"
    ].map(aNumber => expect(() => validatePhoneNumber(aNumber)).not.toThrow());
  });

  it("does not throw an error on valid formats for argentinian mobile phones", () => {
    [
      "+549 (11) 6039 3692",
      "+5491160393692",
      "+549 11 60393692",
      "+549 11 6039 3692",
      "+549 11-6039-3692",
      "+54 9 11-6039-3692",
      "00549 11 6039 3692",
      "+541160393692",
      "+54 11 60393692",
      "+54 11 6039 3692",
      "+54 11-6039-3692",
      "+54 11-6039-3692",
      "0054 11 6039 3692",
      "1160393692",
      "11 60393692",
      "11 6039 3692",
      "11-6039-3692",
      "11-6039-3692",
      "11 6039 3692"
    ].map(aNumber => expect(() => validatePhoneNumber(aNumber)).not.toThrow());
  });

  it("does not throw an error on a valid international phone number", () => {
    [
      "+52 55 1234 5678"
    ].map(aNumber => expect(() => validatePhoneNumber(aNumber)).not.toThrow());
  });

  it("throws an error for an empty string", () => {
    expect(() => validatePhoneNumber("")).toThrow(InvalidPhoneNumberError);
  });

  it("throws an error for a very large phone number", () => {
    expect(
      () => validatePhoneNumber("11598712344444444444")
    ).toThrow(InvalidPhoneNumberError);
  });

  it("throws an error for a very short phone number", () => {
    expect(
      () => validatePhoneNumber("1")
    ).toThrow(InvalidPhoneNumberError);
  });

  it("throws an error if phone number is a word", () => {
    expect(
      () => validatePhoneNumber("PhoneNumber")
    ).toThrow(PhoneNumberWithLettersError);
  });

  it("throws an error if traditional telephone number has no area code", () => {
    expect(
      () => validatePhoneNumber("4307-6233")
    ).toThrow(InvalidPhoneNumberError);
  });

  it("throws an error if phone number has a letter", () => {
    expect(
      () => validatePhoneNumber("54115P9871234")
    ).toThrow(PhoneNumberWithLettersError);
  });

  it("throws an error if area code between brackets is not valid", () => {
    expect(
      () => validatePhoneNumber("(012) 59871234")
    ).toThrow(InvalidPhoneNumberError);
  });

  it("throws an error if area code is not valid", () => {
    expect(
      () => validatePhoneNumber("1259871234")
    ).toThrow(InvalidPhoneNumberError);
  });
});
