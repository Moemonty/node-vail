"use strict";
// Errors out -- Use curly brackets after case
// function switchFunction(a: number): void {
//   switch (a) {
//     case 1:
//       let variableInCase1 = "test";
//       console.log(variableInCase1);
//       break;
//     case 2:
//       let variableInCase1 = "test2";
//       console.log(variableInCase1);
//       break;
//     default:
//       console.log("Default");
//   }
// }
// switchFunction(1);
// switchFunction(2);
// switchFunction(3);
function switchFunction(a) {
    switch (a) {
        case 1: {
            // eslint-disable-next-line prefer-const
            let variableInCase1 = "test";
            console.log(variableInCase1);
            break;
        }
        case 2: {
            // eslint-disable-next-line prefer-const
            let variableInCase1 = "test2";
            console.log(variableInCase1);
            break;
        }
        default:
            console.log("Default");
    }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);
