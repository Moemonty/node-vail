enum EnumWithChoices {
  ChoiceA,
  ChoiceB,
  ChoiceC,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function functionReturnStringFromEnum(c: EnumWithChoices): string {
  switch (c) {
    case EnumWithChoices.ChoiceA:
      return "A";
    case EnumWithChoices.ChoiceB:
      return "B";
    case EnumWithChoices.ChoiceC:
      return "C";
    default:
      return unhandledChoiceFromEnum(c);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function unhandledChoiceFromEnum(x: never): never {
  throw new Error("Choice not defined");
}
