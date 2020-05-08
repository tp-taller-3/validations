import { validatePhoneNumber } from "../src";
import { InvalidPhoneNumberError, PhoneNumberWithLettersError } from "../src";

describe("validatePhoneNumber", () => {
  describe("Argentina area code", () => {
    it("does not throw an error on cell phone number", () => {
      expect(() => validatePhoneNumber({ phoneNumber: "1159871234" })).not.toThrow();
    });

    it("does not throw an error on number with country code", () => {
      expect(() => validatePhoneNumber({ phoneNumber: "541159871234" })).not.toThrow();
    });

    it("does not throw an error on number with country code and plus symbol", () => {
      expect(() => validatePhoneNumber({ phoneNumber: "+541159871234" })).not.toThrow();
    });

    it("does not throw an error on number with hyphen separator", () => {
      expect(() => validatePhoneNumber({ phoneNumber: "+5411-5-987-1234" })).not.toThrow();
    });

    it("does not throw an error on number with area code between brackets", () => {
      expect(() => validatePhoneNumber({ phoneNumber: "+54 (011) 5-987-1234" })).not.toThrow();
    });

    it("throws an error for an empty string", () => {
      expect(() => validatePhoneNumber({ phoneNumber: "" })).toThrow(InvalidPhoneNumberError);
    });

    it("throws an error for a very large phone number", () => {
      expect(
        () => validatePhoneNumber({ phoneNumber: "11598712344444444444" })
      ).toThrow(InvalidPhoneNumberError);
    });

    it("throws an error for a very short phone number", () => {
      expect(
        () => validatePhoneNumber({ phoneNumber: "1" })
      ).toThrow(InvalidPhoneNumberError);
    });

    it("throws an error if phone number is a word", () => {
      expect(
        () => validatePhoneNumber({ phoneNumber: "PhoneNumber" })
      ).toThrow(PhoneNumberWithLettersError);
    });

    it("throws an error if phone number has a letter", () => {
      expect(
        () => validatePhoneNumber({ phoneNumber: "54115P9871234" })
      ).toThrow(PhoneNumberWithLettersError);
    });
  });
});
