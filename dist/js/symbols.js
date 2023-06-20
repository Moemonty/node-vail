"use strict";
let v1 = "value1";
let v2 = "value1";
if (v1 === v2) {
    console.log("Equal when string"); // This will print
}
let s1 = Symbol("value1");
let s2 = Symbol("value1");
if (s1 === s2) {
    console.log("Equal when symbol"); // This will not print, they are not equal
}
