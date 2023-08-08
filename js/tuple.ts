// Tuple
// An array with a fixed number of elements

// useState and useReducer are Tuples

const tomScoreEither: [string | number] = ["Tom"];
const tomScore: [string, number] = ["Tom", 70];

const restScore: [string, ...number[]] = ['Test', 1, 2, 3];

console.log(tomScoreEither);
console.log(tomScore);
console.log(restScore);