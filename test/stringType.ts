import {
    StringType,
    Hangul
} from "../mod.ts"

let han = new Hangul("dkssud");

console.log(han.getType());

console.log(Hangul.getType("ìë"));
console.log(Hangul.getType("dksë"));
console.log(Hangul.getType("@^7$"));
console.log(Hangul.getType("ì8Abi3"));