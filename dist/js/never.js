"use strict";
var EnumWithChoices;
(function (EnumWithChoices) {
    EnumWithChoices[EnumWithChoices["ChoiceA"] = 0] = "ChoiceA";
    EnumWithChoices[EnumWithChoices["ChoiceB"] = 1] = "ChoiceB";
    EnumWithChoices[EnumWithChoices["ChoiceC"] = 2] = "ChoiceC";
})(EnumWithChoices || (EnumWithChoices = {}));
function functionReturnStringFromEnum(c) {
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
function unhandledChoiceFromEnum(x) {
    throw new Error("Choice not defined");
}
