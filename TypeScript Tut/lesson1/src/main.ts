//CHAPTER 1  START HERE

// let username = 'Raj'
// console.log(username)
// let a:number= 12
// let b:number = 2
// let c :number= 6
// console.log(a/b)

//CHAPTER 2   BASIC TYPES  0:25:39

// let myname: string
// let meaning: number
// let album : any
// let isLoad: boolean
// let union : string | number
// let postId: string | number
// let isActive: number | boolean | string
// let re:RegExp = /\w+/g

// myname = '42'
// meaning = 42
// album = 'Raj'
// album = 100
// isLoad = true
// union = 132
// union = 'Raj'

// const sum = (a:number, b:string) => {
//     return a+b
// }

//CHAPTER 3   ARRAYS AND OBJECTS  0:41:23

// let stringArray = ["one", "Raj", "enough"]

// let marksArray = ["maths", 92, "physics", 93]

// let mixedData = ["EVH", 1984 , true]

// let test = []

// let bands:string[] = []

// stringArray[0] = 'Raj'
// stringArray.push('for')

// marksArray[0] = 1923
// marksArray.unshift('Hello')

// marksArray = stringArray
// mixedData = marksArray

// bands.push('Van Halen')

//Tuple

// let myTuple: [string, number, boolean] = ['Ashish', 2001, true]
// mixedData = myTuple
// console.log(mixedData)

//Objects

// let myObj: object;
// myObj = []; //array is a type of object
// console.log(typeof myObj);

// type Guitarist = {
//   name?: string;
//   active?: boolean;
//   album: (string | number)[];
// };

//interface is used for defining classes and type is used for defining functions and other basic types

// interface Instruments {
//   guitar: boolean;
//   bassGuitar: boolean;
//   drums: boolean;
// }

// let evh: Guitarist = {
//   name: "Eddie",
//   active: false,
//   album: ["Fair Warning", "Women and Children First", 1902, 1924],
// };

// let jp: Guitarist = {
//   name: "Jimmi",
//   active: true,
//   album: ["Last shot at time", "Redemption", 1978, 1997],
// };

// let rc: Guitarist = {
//   name: "Rhoe",
//   album: ["Bring that Bitch", "Hello Mrs. ", 1998, 1997],
// };

// console.log(evh === rc);
// evh = jp;

// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name.toUpperCase()} !`;
//   } else "Hello !";
// };
// console.log(greetGuitarist(jp));

// Enums
//"Unlike most typescript features , Enums are not a type-level addition to javascript but sometime added to the language and runtime."

// enum Grade {
//   U = 1,
//   D,
//   C,
//   B,
//   A,
// }
// console.log(Grade.U);

//CHAPTER 4 FUNCTIONS  01:9:59

//Type Aliases

// type stringOrNumber = string | number;

// type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   album: stringOrNumberArray;
// };

// type UserId = stringOrNumber;

//Type Literal

// let myName: "Raj" | "Ashihs" | "Kane";
// myName = "Kane";

// Functions

// const add = (a: number, b: number): number => {
//   return a + b;
// };
// const logMsg = (message: any): void => {
//   console.log(message);
// };

// logMsg("Hello World !");
// logMsg(add(3, 5));

// type mathFunction = (a: number, b: number) => number;

// let multiply: mathFunction = (c, d) => {
//   return c * d;
// };

// logMsg(multiply(4, 6));

//optional parameters

// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c != "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// const sumAll = (a: number, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// logMsg(addAll(2, 3, 4));
// logMsg(addAll(2, 4));
// logMsg(sumAll(5, 6));

//Rest Parameters

// const total = (a: number, ...num: number[]): number => {
//   return a + num.reduce((prev, curr) => prev + curr);
// };

// logMsg(total(100, 2, 3, 4, 5));

// Never Type

// const createError = (errMsg: string) => {
//     throw new Error(errMsg)
// }
// const infinite = (i:number = 1) => {
//     while (true) {
//         i++
//         if( i > 100) break
//      }
// }

//custom type guard

// const isNumber = (value: any): boolean => {
//     return typeof value === 'number' ? true : false
// }

//use of the never type

// const numberOrString = (value: number | string): string => {
//     if (typeof value === 'string') return 'string'
//     if (isNumber(value)) return 'number'
//     return createError('This should never happen')
// }

// CHAPTER 5 ASSERTIONS 1:41:37

type One = string;
type Two = string | number;
type Three = "hii";
//convert to more or less specific
let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific
let d = <One>"world";
let e = <string | number>"world";
console.log(`${a} ${b} ${c} ${d} ${e}`);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c == "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 3, "concat") as string;

// be careful ! TS sees no problem because of assertion - but a string is required not number
let nextVal: number = addOrConcat(2, 3, "concat") as number;

// uncomment next line and read warning
//10 as string
10 as unknown as string;

// The DOM

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("img") as HTMLElement;

img.src;
myImg.id;
