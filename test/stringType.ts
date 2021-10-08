import {
    StringType,
    Hangul
} from "../mod.ts"

let han = new Hangul("dkssud");

console.log(han.getType());

console.log(Hangul.getType("안녕"));
console.log(Hangul.getType("dks녕"));
console.log(Hangul.getType("@^7$"));
console.log(Hangul.getType("아8Abi3"));