var Orientation;
(function (Orientation) {
    Orientation["East"] = "test";
    Orientation["West"] = "West";
    Orientation["North"] = "North";
    Orientation["South"] = "South";
})(Orientation || (Orientation = {}));
var directionInNumber = Orientation.East; // Access with the Enum
var directionInString = Orientation[0]; // Access the Enum string from number
var west = Orientation[1]; // Access the Enum string from number
console.log(directionInNumber);
console.log(directionInString, ' string');
console.log(west, ' string');
