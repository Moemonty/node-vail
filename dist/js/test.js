"use strict";
// eslint-disable-next-line prefer-const
let anotherRandomVariable = 'test';
console.log('this is name', anotherRandomVariable);
// Won't compile new test.js
// const NAME = 'test';
// NAME = 'not this name';
function constFunction() {
    const myList = [1, 2, 3];
    myList.push(4);
    console.log(myList);
}
constFunction();
function constBlockedFunction() {
    const myList = [1, 2, 3];
    // myList = [1, 2, 3, 4]
    // above will typescript error because reference changes
    console.log(myList);
}
constBlockedFunction();
