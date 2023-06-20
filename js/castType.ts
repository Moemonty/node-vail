const unknownType: unknown = "123"
const unknownType2: unknown = "Name"

const cast1: number = <number>unknownType;
const cast2: number = unknownType as number;

// const name: string = unknownType2 as string;

console.log(name);
