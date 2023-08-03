enum Orientation {
  East="test",
  West,
  North,
  South,
}

let directionInNumber = Orientation.East; // Access with the Enum
let directionInString = Orientation[0];  // Access the Enum string from number
let west = Orientation[1];  // Access the Enum string from number

console.log(directionInNumber);
console.log(directionInString, ' string');
console.log(west, ' string');