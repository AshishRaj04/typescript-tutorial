"use strict";
//CHAPTER 1  START HERE
//convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "world";
console.log(`${a} ${b} ${c} ${d} ${e}`);
const addOrConcat = (a, b, c) => {
    if (c == "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
// be careful ! TS sees no problem because of assertion - but a string is required not number
let nextVal = addOrConcat(2, 3, "concat");
// uncomment next line and read warning
//10 as string
10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("img");
img.src;
myImg.id;
