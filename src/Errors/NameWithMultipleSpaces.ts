export class NameWithMultipleSpaces extends Error {
  public static buildMessage() {
    return "El nombre no debe contener mĂșltiples espacios";
  }

  constructor() {
    super(NameWithMultipleSpaces.buildMessage());
  }
}
