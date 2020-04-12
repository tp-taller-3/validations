import { InvalidURLError } from "../src/Errors";
import { validateURL } from "../src/Validators/validateURL";

describe("validateURL", () => {
  it("errors on empty strings", () =>
    expect(() => validateURL("")).toThrow(InvalidURLError)
  );

  it("expects a dot", () =>
    expect(() => validateURL("google")).toThrow(InvalidURLError)
  );

  it("doesn't allow two consecutive dots", () =>
    expect(() => validateURL("google..com")).toThrow(InvalidURLError)
  );

  it("allows partial urls", () =>
    expect(() => validateURL("google.com")).not.toThrow(InvalidURLError)
  );

  it("allows complete urls", () =>
    expect(() => validateURL("http://www.google.com")).not.toThrow(InvalidURLError)
  );

  it("allows complete urls with slash in the end", () =>
    expect(() => validateURL("http://www.google.com/")).not.toThrow(InvalidURLError)
  );
});
