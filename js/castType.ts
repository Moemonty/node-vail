const unknownType: unknown = "123"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unknownType2: unknown = "Name"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cast1: number = <number>unknownType;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cast2: number = unknownType as number;

// const name: string = unknownType2 as string;

console.log(name);
